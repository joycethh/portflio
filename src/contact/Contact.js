import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { Send, GitHub, LinkedIn, Email } from "@mui/icons-material/";
import SectionContainer from "../SectionContainer";
import Input from "./Input";

const Contact = () => {
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);
  const [open, setOpen] = useState(false);

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSucess(JSON.stringify(response.text));
          setOpen(true);
        },
        (error) => {
          setError(JSON.stringify(error.text));
          setOpen(true);
        }
      );
  };

  return (
    <div id="contact">
      <SectionContainer title="Contact">
        <Box
          sx={{
            width: "70%",
            margin: "auto",
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                I am open with new opporturnities. If you are interested in
                hiring me for your projects, use the form below to send me a
                message. Let's make something nice!
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                You can also find me on the following channels
              </Typography>
            </CardContent>
            <Stack direction="row" spacing={2}>
              <IconButton href="https://github.com/joycethh" target="_blank">
                <GitHub />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/joycethh/"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              <IconButton href="mailto: joycethhh@gmail.com" target="_blank">
                <Email />
              </IconButton>
            </Stack>
          </Card>

          <form ref={refForm} onSubmit={sendEmail}>
            <Box pt={5}>
              <Grid container spacing={3}>
                <Input name="name" label="Name" half />
                <Input name="email" label="Email" type="email" half />
                <Input name="message" label="Message" multiline rows={7} />

                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
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
            </Box>
          </form>
          {sucess && (
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle> Your message is sent!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Thanks! I'll be in touch really soon.
                </DialogContentText>
              </DialogContent>
            </Dialog>
          )}

          {error && (
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle> Opps! Something went wrong!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please try again later or contact me directly via email.
                </DialogContentText>
              </DialogContent>
            </Dialog>
          )}
        </Box>
      </SectionContainer>
    </div>
  );
};

export default Contact;
