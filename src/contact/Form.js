import React from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  Paper,
  Typography,
  styled,
} from "@mui/material";

import { Send } from "@mui/icons-material/";

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
        multiline
        rows={rows}
      />
    </Grid>
  );
};

const TitleBox = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(6),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

const Form = () => {
  return (
    <Box pt={5}>
      <Paper sx={{ backgroundColor: "#faf9f9", borderRadius: "5px" }}>
        <TitleBox>
          <Typography variant="h5">Get in Touch</Typography>
        </TitleBox>
        <Grid container spacing={3} p={5}>
          <Input name="name" label="Name" half />
          <Input name="email" label="Email" type="email" half />
          <Input name="message" label="Message" multiline rows={7} />
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              endIcon={<Send />}
              sx={{ width: "100%" }}
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Form;
