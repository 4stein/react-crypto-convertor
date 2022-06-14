import { styled } from "@mui/material/styles";
import { Box, Container, Paper } from "@mui/material";

// styled
export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10),
}));
export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const StypedRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
