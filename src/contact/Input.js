import React from "react";
import { TextField, Grid } from "@mui/material";
const Input = ({ half, name, label, type, rows }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        required
        row={rows}
      />
    </Grid>
  );
};
export default Input;
