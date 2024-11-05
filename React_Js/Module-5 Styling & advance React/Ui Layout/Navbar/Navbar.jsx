import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Popover, Card, CardContent, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";

import Badge from "@mui/material/Badge";
import Kidslogo from "../Images/Kids logo.png";

const Navbar = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [anc, setAnc] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = (event) => {
    setAnc(event.currentTarget);
  };

  const handleClose = () => {
    setAnc(null);
  };

  const open = Boolean(anc);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <hr />
      <Box >
        <div className="mainhomedivfornav">
          <Toolbar sx={{ color: "black" }}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <img
                src={Kidslogo}
                alt=""
                srcset=""
                height="100px"
                width="100px"
              />
            </Typography>

            <div style={{ display: "flex" }}>
              {/* SearchBar -- Section */}
              <div
                style={{
                  display: "flex",
                  marginLeft: "60px",
                  border: "4px solid #ccc",
                  borderRadius: "2px",
                  width: "500px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <div>
                  <button
                    className="forSearchSection forallcatandicon"
                    style={{ marginTop: "1px" }}
                  >
                    All Category
                  </button>
                </div>
                <div style={{ marginLeft: "14px" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="forSearchSection inputforsearch"
                    placeholder="Search"
                  />
                </div>
                <div style={{ marginLeft: "1px" }}>
                  <button
                    className="forallcatandicon"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#c1c1cd", height: "12px" }}
                      className="forSearchSection"
                    />
                  </button>
                </div>
              </div>
              {/* End  -- Section */}

              {/* Icon    -- Section */}
              <div style={{ display: "flex", marginLeft: "50px", gap: "20px" }}>
                <FormControl>
                  <Select
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    sx={{ height: "25px", marginTop: "10px" }}
                  >
                    <MenuItem value="" disabled>
                      Select an option
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                  </Select>
                </FormControl>

                {/* put section here */}

                <div className="navicons">
                  <Badge badgeContent={0} showZero color="success">
                    <LoopOutlinedIcon />
                  </Badge>
                  <Button
                    color="inherit"
                    sx={{
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        // color: "green",
                      },
                    }}
                  >
                    Compare
                  </Button>
                </div>

                <div className="navicons">
                  <Badge badgeContent={0} showZero color="success">
                    <FavoriteBorderIcon />
                  </Badge>
                  <Button
                    color="inherit"
                    sx={{
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        // color: "green",
                      },
                    }}
                  >
                    Wishlist
                  </Button>
                </div>

                <div className="navicons">
                  <Badge badgeContent={0} showZero color="success">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                  <Button
                    color="inherit"
                    sx={{
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        // color: "green",
                      },
                    }}
                  >
                    Cart
                  </Button>
                </div>

                <div className="navicons">
                  <PersonOutlineOutlinedIcon />
                  <Button
                    color="inherit"
                    sx={{
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        // color: "green",
                      },
                    }}
                  >
                    Account
                  </Button>
                </div>
              </div>
              {/* End    -- Section */}
            </div>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </div>
        {/* {renderMobileMenu}
        {renderMenu} */}
      </Box>
      <hr />

      <div style={{ display: "flex", alignItems: "center" }} className="mainhomedivfornav">
        <div>
          <Button variant="contained" color="success">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: 0 }}>
                <SquareOutlinedIcon style={{ fontSize: "12px" }} />
                <SquareOutlinedIcon style={{ fontSize: "12px" }} />
              </div>
              <div style={{ display: "flex", gap: 0 }}>
                <SquareOutlinedIcon style={{ fontSize: "12px" }} />
                <SquareOutlinedIcon style={{ fontSize: "12px" }} />
              </div>
            </div>
            <div style={{ marginLeft: "5px" }}>Browse All Category</div>
          </Button>
        </div>
        <div>
          <Toolbar>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              <LocalFireDepartmentOutlinedIcon className="icon-fire" />
              Hot Deals
            </Button>
            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              About
            </Button>

            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
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
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              Vendors
            </Button>

            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              Mega menu
            </Button>

            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              Blog
            </Button>

            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              Pages
            </Button>

            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "green",
                },
              }}
            >
              Contact
            </Button>

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
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
