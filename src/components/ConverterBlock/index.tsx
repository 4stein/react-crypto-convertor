import React from "react";
import { observer, inject } from "mobx-react";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import CurrenciesStore from "../../store/CurrenciesStore";
import ConverterStore from "../../store/ConverterStore";
import styles from "../../styles";
import { StyledPaper, StypedRow } from "../../styled";

type IConverterBlock = {
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
};

type TReducerState = {
  value1: string;
  value2: string;
  inPrice: number;
  outPrice: number;
};

type TSetValue1Action = {
  type: string;
  payload: string;
};

// eslint-disable-next-line
type TAction = TSetValue1Action;

function reducer(state: TReducerState, action: any): TReducerState {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        value2: String(
          (Number(action.payload.value) * state.inPrice) / state.outPrice
        ),
      };

    case "SET_PRICES":
      return {
        ...state,
        inPrice: action.payload.in,
        outPrice: action.payload.out,
      };

    default:
      return state;
  }
}

const ConverterBlock: React.FC<IConverterBlock> = inject(
  "currenciesStore",
  "converterStore"
)(
  observer(({ currenciesStore, converterStore }) => {
    const [selectedOutCoin, setSelectedOutCoin] = React.useState("USDT");
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);
    const inPrice = Number(converterStore?.getSelectedCoin.price) || 0;
    const outPrice =
      Number(
        currenciesStore!.getItems.find((obj) => obj.name === selectedOutCoin)
          ?.price
      ) || 0;
    const [state, dispatch] = React.useReducer(reducer, {
      value1: "",
      value2: "",
      inPrice,
      outPrice,
    });

    React.useEffect(() => {
      dispatch({
        type: "SET_PRICES",
        payload: {
          in: inPrice,
          out: outPrice,
        },
      });
    }, [inPrice, outPrice]);

    const onUpdateField = (name: string, value: string) => {
      dispatch({
        type: "SET_VALUE",
        payload: {
          name,
          value,
        },
      });
    };

    return (
      <StyledPaper>
        <StypedRow>
          <FormControl style={styles.currencyInput}>
            <TextField
              type="number"
              value={state.value1}
              onChange={(e: any) => onUpdateField("value1", e.target.value)}
              label="Total"
            />
          </FormControl>
          <FormControl style={styles.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Currency
            </InputLabel>
            <Select value={converterStore?.getSelectedCoin.name || ""}>
              {coins.map((name) => (
                <MenuItem  key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </StypedRow>
        <StypedRow style={{ marginTop: "15px", marginBottom: "15px" }}>
          <FormControl style={styles.currencyInput}>
            <TextField type="number" value={state.value2} label="Total" />
          </FormControl>
          <FormControl style={styles.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Currency
            </InputLabel>
            <Select
              onChange={(e) => setSelectedOutCoin(e.target.value as string)}
              value={selectedOutCoin}
              defaultValue="USDT"
            >
              {coins.map((name) => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </StypedRow>
      </StyledPaper>
    );
  })
);

export default ConverterBlock;
