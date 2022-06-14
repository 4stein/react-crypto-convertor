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
import { StyledContainer, StyledPaper, StypedRow } from "./styled";

const App = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable />
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <StypedRow>
              <ConverterBlock />
            </StypedRow>

            <StypedRow style={{ marginTop: "15px", marginBottom: "15px" }}>
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
