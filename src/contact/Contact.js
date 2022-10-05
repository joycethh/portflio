import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import SectionContainer from "../SectionContainer";
import Input from "./Input";

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
        <Box
          sx={{
            width: "70%",
            margin: "auto",
          }}
        >
          <Typography variant="body1">
            I am open with new opportunities. Use the form below to get in touch
            if you are interested in hiring me for your projects.
          </Typography>

          <form ref={refForm} onSubmit={sendEmail}>
            <Box>
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
                    endIcon={<SendIcon />}
                    sx={{ width: "100%" }}
                  >
                    SEND
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </SectionContainer>
    </div>
  );
};

export default Contact;
