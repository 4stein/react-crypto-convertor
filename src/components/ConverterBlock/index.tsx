// import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

type TConverterBlock = {};

const ConverterBlock: React.FC<TConverterBlock> = () => {
  return (
    <>
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
    </>
  );
};

export default ConverterBlock;
