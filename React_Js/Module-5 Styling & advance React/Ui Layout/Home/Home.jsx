import React, { useState } from "react";
import lemonimg from "../Images/lemon.jpg";
import lemonimg2 from "../Images/lemonimg2.png";
import str from "../Images/str.jpg";
import apple from "../Images/apple.jpg";
import banana from "../Images/banana.jpg";
import cabbage from "../Images/cabbage.jpg";
import kivi from "../Images/kivi.jpg";
import milk from "../Images/milk.jpg";
import petfoods from "../Images/petfoods.jpg";
import onion from "../Images/onion.png";
import "./Home.css";
import Toolbar from "@mui/material/Toolbar";

import {
  Popover,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import Typography from "@mui/material/Typography";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";



const Home = () => {
  const [anc, setAnc] = useState(null);

  const handleClick = (event) => {
    setAnc(event.currentTarget);
  };
  const handleClose = () => {
    setAnc(null);
  };

  const open = Boolean(anc);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      {" "}
      <div className="mainhomediv">
        <div>
          <div className="textoverimg">
            <p
              style={{
                fontSize: "50px",
                margin: "0px",
                fontFamily: "sans-serif",
              }}
            >
              Don't miss amazing
              <br /> grocery deals
            </p>
            <p style={{ fontFamily: "monospace" }}>
              Signup for the daily newsletter
            </p>
          </div>
          <div className="divgroceryinput">
            <input type="text" name="" id="" className="inputandbtn" />
            <button className="inputandbtn btnforsubs">Subscribe</button>
          </div>

          <img src={lemonimg} alt="" srcset="" className="lemonimgc" />
          <img src={lemonimg2} alt="" srcset="" className="fruitsimgc" />
        </div>
      </div>
      <div className="toolbarcat">
        <h2 style={{ fontFamily: "sans-serif" }}>Feachered Catagories</h2>
        <Toolbar>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent", // Remove hover background
                color: "green", // Keep text color
              },
            }}
          >
            Milk
          </Button>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent", // Remove hover background
                color: "green", // Keep text color
              },
            }}
          >
            Coffee
          </Button>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent", // Remove hover background
                color: "green", // Keep text color
              },
            }}
          >
            Pet Foods
          </Button>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent", // Remove hover background
                color: "green", // Keep text color
              },
            }}
          >
            Vegetables
          </Button>

          {/* <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent", // Remove hover background
                  color: "green", // Keep text color
                },
              }}
            >
              Shop
            </Button>

            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent", // Remove hover background
                  color: "green", // Keep text color
                },
              }}
            >
              Vendors
            </Button> */}

          <Popover
            id={id}
            open={open}
            anchorEl={anc}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Card sx={{ width: "200px" }}>
              <CardContent>
                <Typography
                  onClick={() => alert("Course 1 selected")}
                  sx={{ cursor: "pointer", padding: "8px" }}
                  variant="body2"
                >
                  Course 1
                </Typography>
                <Typography
                  onClick={() => alert("Course 2 selected")}
                  sx={{ cursor: "pointer", padding: "8px" }}
                  variant="body2"
                >
                  Course 2
                </Typography>
                <Typography
                  onClick={() => alert("Course 3 selected")}
                  sx={{ cursor: "pointer", padding: "8px" }}
                  variant="body2"
                >
                  Course 3
                </Typography>
              </CardContent>
            </Card>
          </Popover>
        </Toolbar>
        <div className="iconforarrow">
          <Button
            sx={{
              height: "30px",
              width: "30px", // Set a specific width
              minWidth: "0", // Prevents default min width
              padding: "0",
              borderRadius: "50%", // Removes padding to keep it small
              backgroundColor: "#ccc",
              color: "black",
            }}
          >
            <ArrowBackRoundedIcon style={{ height: "20px", width: "20px" }} />
          </Button>
          <Button
            sx={{
              height: "30px",
              width: "30px",
              minWidth: "0",
              padding: "0",
              borderRadius: "50%",
              backgroundColor: "#ccc",
              color: "black",
            }}
          >
            <ArrowForwardRoundedIcon
              style={{ height: "20px", width: "20px" }}
            />
          </Button>
          {/* <ArrowCircleLeftIcon style={{color:"#ccc"}}/>
          <ArrowCircleRightIcon/> */}
        </div>
      </div>
      <div className="cardfordiv">
        <div className="divforcard">
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={str}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Straberry</label>
            <label htmlFor="">$45</label>
          </Card>
        </div>
        <div className="divforcard" style={{backgroundColor:"#fcc1c1	"}}>
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={apple}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Apple</label>
            <label htmlFor="">$56</label>
          </Card>
        </div>
        <div className="divforcard" style={{backgroundColor:"#eaf78a	"}}>
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={kivi}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Kivi</label>
            <label htmlFor="">$67</label>
          </Card>
        </div>
        <div className="divforcard" style={{backgroundColor:"#e0fcc1	"}}>
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={banana}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Banana</label>
            <label htmlFor="">$54</label>
          </Card>
        </div>
        <div className="divforcard" style={{backgroundColor:"#fcc1c1	"}}>
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={milk}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Milk</label>
            <label htmlFor="">$90</label>
          </Card>
        </div>
        <div className="divforcard" style={{backgroundColor:"#c1fcdd	"}}>
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={cabbage}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Cabbage</label>
            <label htmlFor="">$39</label>
          </Card>
        </div>
        <div className="divforcard" style={{backgroundColor:"#c1dcfc	"}}>
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={onion}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Onion</label>
            <label htmlFor="">$59</label>
          </Card>
        </div>
        <div className="divforcard">
          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"150px",
              height:"150px"
            }}
          >
            <CardMedia
              sx={{ height: "100px", width: "100px" }}
              image={petfoods}
              title="green iguana"
            />
            <br />
            <label htmlFor="">Cat Food</label>
            <label htmlFor="">$67</label>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
