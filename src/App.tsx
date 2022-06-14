import React from "react";
import {
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  // Typography,
} from "@mui/material";
import { ConverterBlock, CryptoTable } from "./components";
import { TCoin } from "./types";
import axios from "axios";
import { StyledContainer, StyledPaper, StypedRow } from "./styled";



const App = () => {
  // useState
  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);
  // useEffect
  React.useEffect(() => {
    const getCryptocompare = async () => {
      const { data } = await axios.get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      );
      // console.log(data.Data);
      const coins: TCoin[] = data.Data.map((coin: any) => {
        const obj: TCoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(2),
          volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
        };
        return obj;
      });
      setAllCoins(coins);
    };
    getCryptocompare();
  }, []);

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable allCoins={allCoins} />
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <StypedRow>
              <FormControl style={{ width: "calc(70% - 10px)" }}>
                <TextField fullWidth label="Total" />
              </FormControl>

              <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select labelId="demo-simple-select-label" value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </StypedRow>

            <StypedRow style={{ marginTop: "15px", marginBottom: "15px" }}>
              <ConverterBlock />
            </StypedRow>
            {/* <Typography
              style={{ textAlign: "left" }}
              variant="h5"
              component="h5"
            >
              77.81 USD
            </Typography> */}
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default App;
