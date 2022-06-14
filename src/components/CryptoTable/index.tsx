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
import { TCoin } from "../../types";

type ICryptoTable = {
  allCoins: TCoin[];
}

const CryptoTable: React.FC<ICryptoTable> = ({ allCoins }) => {
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
          {!allCoins.length ? (
            <tr>
              <td>"Loading..."</td>
            </tr>
          ) : (
            allCoins.map((coin: TCoin) => (
              <TableRow hover key={coin.name}>
                <TableCell>
                  <img
                    style={{ width: 18, height: 18, borderRadius: 30 }}
                    src={coin.imageUrl}
                    alt="Coin icon"
                  />
                </TableCell>
                <TableCell align="left">{coin.name}</TableCell>
                <TableCell align="left">{coin.fullName}</TableCell>
                <TableCell align="left">${coin.price}</TableCell>
                <TableCell align="left">${coin.volume24Hour}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
