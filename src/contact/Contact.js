import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { SpeechBubble } from "./Elements";
import SectionContainer from "../SectionContainer";
import Form from "./Form";
import Socials from "../Socials";
import Avatar from "../Avatar";

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
      <Box sx={{ backgroundColor: "white", p: 6 }}>
        <SectionContainer title="Contact">
          <Box
            sx={{
              width: "70%",
              margin: "auto",
            }}
          >
            <Box
              pt={7}
              pb={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar />
            </Box>

            {/* speech bubble */}
            <SpeechBubble>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: 5,
                  pl: 4,
                  pr: 4,
                  pb: 2,
                }}
              >
                <Typography variant="body1">
                  I am open with new opporturnities. Send me a message and let's
                  make something nice!
                </Typography>
              </Box>

              <Box
                sx={{
                  pl: 4,
                  pr: 4,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">
                  You can also find me on the following channels
                </Typography>
              </Box>
              <Socials />
            </SpeechBubble>

            <form ref={refForm} onSubmit={sendEmail}>
              <Form />
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
      </Box>
    </div>
  );
};

export default Contact;
