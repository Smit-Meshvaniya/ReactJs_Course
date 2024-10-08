import React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "./Program5.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 350,
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 550,
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Program5() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openr, setOpenr] = React.useState(false);
  const handleOpenr = () => setOpenr(true);
  const handleCloser = () => setOpenr(false);

  return (
    <div>
      <CardContent>
        <div className="h2modal">
          <h2>Modal Login Form</h2>
          <Button variant="contained" onClick={handleOpen}>
            Open Modal
          </Button>
          <h2>Modal Registration Form</h2>
          <Button variant="contained" onClick={handleOpenr}>
            Open Modal
          </Button>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button className="p6btn1" onClick={handleClose}>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="p6faCircleXmark"
                />
              </button>
            </div>

            <div className="divmodal">
              <h1>Login to my account</h1>
              <div style={{ width: "450px" }}>
                <TextField
                  id="standard-basic"
                  label="Email address"
                  variant="standard"
                  fullWidth={true}
                />
                <br />
                <br />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  fullWidth={true}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox {...label} style={{ marginLeft: "13px" }} />
              <p style={{ pointerEvents: "none", fontWeight: "bold" }}>
                Remember Me on this computer
              </p>
            </div>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                color: "orange",
                outlineColor: "orange",
                borderColor: "orange",
                borderRadius: "1px",
                backgroundColor: "white",
              }}
            >
              Login
            </Button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "cornflowerblue",
              }}
            >
              <h4>
                {" "}
                <a
                  href="http://"
                  style={{ textDecoration: "none", color: "cornflowerblue" }}
                >
                  Forget a password?{" "}
                </a>{" "}
              </h4>
              <h3>
                {" "}
                <a
                  href="http://"
                  style={{ textDecoration: "none", color: "cornflowerblue" }}
                >
                  Create a New Account
                </a>{" "}
              </h3>
            </div>
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
          open={openr}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style1}>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button className="p6btn1" onClick={handleCloser}>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="p6faCircleXmark"
                />
              </button>
            </div>

            <div className="divmodal">
              <h1>Registration Form</h1>
              <div style={{ width: "450px" }}>
                <TextField
                  id="standard-basic"
                  label="Full name"
                  variant="standard"
                  fullWidth={true}
                />
                <br />
                <br />

                <TextField
                  id="standard-basic"
                  label="Email address"
                  variant="standard"
                  fullWidth={true}
                />
                <br />
                <br />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  fullWidth={true}
                />
                <br />
                <br />

                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Please Select Your Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                  fullWidth={true}
                />
                <br />
                <br />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox {...label} style={{ marginLeft: "13px" }} />
              <p style={{ pointerEvents: "none", fontWeight: "bold" }}>
                Remember Me on this computer
              </p>
            </div>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                color: "orange",
                outlineColor: "orange",
                borderColor: "orange",
                borderRadius: "1px",
                backgroundColor: "white",
              }}
            >
              Sign Up
            </Button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "cornflowerblue",
              }}
            >
              <h4>
                {" "}
                <a
                  href="http://"
                  style={{ textDecoration: "none", color: "cornflowerblue" }}
                >
                  Continue to Login?{" "}
                </a>{" "}
              </h4>
              <h3>
                {" "}
                <a
                  href="http://"
                  style={{ textDecoration: "none", color: "cornflowerblue" }}
                >
                  Create a New Account
                </a>{" "}
              </h3>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Program5;
