import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TCoin, TCoinDiff } from "../../types";
import { observer, inject } from "mobx-react";
import CurrenciesStore from "../../store/CurrenciesStore";
import ConverterStore from "../../store/ConverterStore";
import styles from "../../styles";

type ICryptoTable = {
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
};

const CryptoTable: React.FC<ICryptoTable> = inject(
  "currenciesStore",
  "converterStore"
)(
  observer(({ currenciesStore, converterStore }: ICryptoTable) => {
    const items: TCoin[] = currenciesStore!.getItems;
    const diffObj: TCoinDiff = currenciesStore!.getDiffObj;
    // useEffect
    React.useEffect(() => {
      if (currenciesStore) {
        currenciesStore.fetchCoins();
        setInterval(() => {
          currenciesStore.fetchCoins();
        }, 30 * 1000);
      }
      // eslint-disable-next-line
    }, []);

    const onClickRow = (coin: TCoin) => {
      if (converterStore) {
        converterStore.setSelectedCoin(coin);
      }
    };

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">volume24hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!items.length ? (
              <tr>
                <td>"Loading..."</td>
              </tr>
            ) : (
              items.map((coin: TCoin) => (
                <TableRow
                  key={coin.name}
                  hover
                  style={styles.rowCurrency}
                  onClick={() => onClickRow(coin)}
                >
                  <TableCell>
                    <img
                      style={{ width: 18, height: 18, borderRadius: 30 }}
                      src={coin.imageUrl}
                      alt="Coin icon"
                    />
                  </TableCell>
                  <TableCell align="left">{coin.name}</TableCell>
                  <TableCell align="left">{coin.fullName}</TableCell>
                  <TableCell
                    style={
                      diffObj[coin.name] &&
                      styles[`${diffObj[coin.name]}Column`]
                    }
                    align="left"
                  >
                    ${coin.price}
                  </TableCell>
                  <TableCell align="left">${coin.volume24Hour}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  })
);

export default CryptoTable;
