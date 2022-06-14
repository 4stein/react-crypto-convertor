import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { inject, observer } from "mobx-react";
import ConverterStore from "../../store/ConverterStore";
import CurrenciesStore from "../../store/CurrenciesStore";

// type
type TConverterBlock = {
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
};

const ConverterBlock: React.FC<TConverterBlock> = inject(
  "currenciesStore",
  "converterStore"
)(
  observer(({ currenciesStore, converterStore }) => {
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);
    return (
      <>
        <FormControl style={{ width: "calc(70% - 10px)" }}>
          <TextField fullWidth label="Total" />
        </FormControl>

        <FormControl style={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select labelId="demo-simple-select-label" value={coins[0] || ""}>
            {coins.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  })
);

export default ConverterBlock;
