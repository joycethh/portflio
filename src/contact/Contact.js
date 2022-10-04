import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef, useState } from "react";

import SectionContainer from "../SectionContainer";

const Contact = () => {
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);

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
          console.log("sucess", response.status, response.text);
          setSucess(JSON.stringify(response.text));
        },
        (error) => {
          console.log("error", error);
          console.log(JSON.stringify(error));
          setError(JSON.stringify(error.text));
        }
      );
  };

  return (
    <div id="contact">
      <SectionContainer title="Contact">
        <Box>
          <Typography variant="body1">
            I am open with new opportunities. Use the form below to get in touch
            if you are interested in hiring me for your projects.
          </Typography>
          <Typography variant="h6">
            You can also fine me on the following channels
          </Typography>

          <IconButton href="https://github.com/joycethh" target="_blank">
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/joycethh/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>

          <form ref={refForm} onSubmit={sendEmail}>
            <Box
              overflow="hidden"
              style={{ position: "relative", minHeight: "300px" }}
            >
              <TextField
                variant="filled"
                margin="normal"
                type="text"
                name="name"
                placeholder="Name"
              />
              <TextField
                variant="filled"
                type="email"
                margin="normal"
                name="email"
                placeholder="Email"
                required
              />

              <TextField
                variant="filled"
                margin="normal"
                multiline
                rows={4}
                fullWidth
                type="text"
                name="message"
                placeholder="Message"
                required
              />

              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                  sx={{ width: "200px" }}
                >
                  SEND
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </SectionContainer>
    </div>
  );
};

export default Contact;
