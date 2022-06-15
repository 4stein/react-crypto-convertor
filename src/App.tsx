import React from "react";
import { Grid } from "@mui/material";
import { ConverterBlock, CryptoTable } from "./components";
import { StyledContainer } from "./styled";

const App = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default App;
