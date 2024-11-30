import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


function Prgmui() {
  const [data, setData] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  //--for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      type: "button",
      width: 230,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => handleEdit(params.row.id)}>
            <EditIcon sx={{ color: "blue" }} />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    fontSize: "30px",
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") 
      .then((res) => res.json())
      .then((json) => {
        const formattedRows = json.map((product) => ({
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
        }));
        setRows(formattedRows); 
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Deleted product:", json);
        setRows((i) => i.filter((row) => row.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  const handleEdit = (id) =>{
    handleOpen();
    fetch(`https://fakestoreapi.com/products/${id}`,{
      method:"PATCH"
  })
      .then((res)=>setData.json(res.data))
      .then(json=>console.log(json)) 
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#2e8af3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
        }}
      >
        <h2>React Material Ui</h2>
        <Box sx={{ display: "flex", width: "500px" }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
        <div>
          <br />
          <Button variant="contained" onClick={handleOpen}>
            Add Blog
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <form
                  action=""
                  method="post"
                  onSubmit={saveData}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <label htmlFor="name">Product Name</label>
                  <input
                    type="text"
                    name="title"
                    id=""
                    style={{
                      border: "1px solid black",
                      fontSize: "25px",
                      padding: "2px",
                    }}
                    onChange={handleChange}
                    value={data.title}
                  />

                  <br />
                  <label htmlFor="name">Product Category</label>
                  <input
                    type="text"
                    name="category"
                    id=""
                    style={{
                      border: "1px solid black",
                      fontSize: "25px",
                      padding: "2px",
                    }}
                    onChange={handleChange}
                    value={data.category}
                  />
                  <br />
                  <label htmlFor="name">Product Price</label>
                  <input
                    type="text"
                    name="price"
                    id=""
                    style={{
                      border: "1px solid black",
                      fontSize: "25px",
                      padding: "2px",
                    }}
                    onChange={handleChange}
                    value={data.price}
                  />
                  <br />
                  <input
                    type="submit"
                    value="Submit"
                    style={{
                      height: "50px",
                      width: "100px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                </form>
              </div>
            </Box>
          </Modal>
        </div>

        <Paper sx={{ height: 400, width: "500px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </>
  );
}

export default Prgmui;
