import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Print from "../Images/Slicing/print.svg";
import Setting from "../Images/Slicing/settings.svg";
import Plus from "../Images/Slicing/plus.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Edit from "../Images/Slicing/edit.svg";
import trash from "../Images/Slicing/trash.png";
import Close from "../Images/Slicing/close.svg";
import Modal from "../Component/Modal";
import { Button } from "@material-ui/core";
import { navigate } from "@reach/router";
import Drawer from "../Component/Drawer";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    background: "white",
    boxShadow: "none",
  },
  headerBtn: {
    background: "#F5F6FA",
    borderRadius: "8px",
    marginRight: "0.5rem",
  },
  headerPlusBtn: {
    background: "#007AFF",
    borderRadius: "8px",
    marginRight: "0.5rem",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
var name = localStorage.getItem("Name");
var description = localStorage.getItem("Descrption");
var price = localStorage.getItem("Price");
var discount = localStorage.getItem("Discount");
var avalable = localStorage.getItem("Avalable");
const ListData = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Description: "",
    Price: "",
    Discount: "",
    avalable: "",
  });
  const [Name, setName] = useState();
  const [Description, setDescription] = useState();
  const [Price, setPrice] = useState();
  const [Discount, setDiscount] = useState();
  const [avalable, setavalable] = useState();
  useEffect(()=>{
    const name = localStorage.getItem("Name");
    const description = localStorage.getItem("Descrption");
    const price = localStorage.getItem("Price");
    const discount = localStorage.getItem("Discount");
    const avalable = localStorage.getItem("Avalable");
  })
  const NameChange = (e) => {
    setName(e.target.value);
  };
  const DiscriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const PriceChange = (e) => {
    setPrice(e.target.value);
  };
  const DiscountChange = (e) => {
    setDiscount(e.target.value);
  };
  const AvalableChange = (e) => {
    setavalable(e.target.value);
  };
  const AddData = () => {
    setAdd(true);
  };
  const Save = () => {
    localStorage.setItem("Name", Name);
    localStorage.setItem("Descrption", Description);
    localStorage.setItem("Price", Price);
    localStorage.setItem("Discount", Discount);
    localStorage.setItem("Avalable", avalable);
  };
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              20 Products
            </Typography>

            <IconButton className={classes.headerBtn} onClick={()=>window.print()   }>
              <img src={Print} alt="print" />
            </IconButton>
            <IconButton className={classes.headerBtn}>
              <img src={Setting} alt="print" />
            </IconButton>
            <IconButton className={classes.headerPlusBtn} onClick={AddData}>
              <img src={Plus} alt="print" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <TableContainer component={Paper} className={classes.header}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Available</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <TableCell>1</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>1</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{discount}</TableCell>
              <TableCell>{avalable}</TableCell>
              <TableCell>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <img src={Edit} alt="edit" />
                  <img
                    src={trash}
                    alt="delete"
                    height={20}
                    onClick={() => setOpen(true)}
                  />
                </div>
              </TableCell>
            </StyledTableRow>
           
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#ff00001f",
                borderRadius: "37px",
                width: "50px",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={trash} width="25" />
            </div>
          </div>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <span style={{ fontWeight: 700 }}>
              Are you sure you want to delete this project?
            </span>
          </div>
          <div>
            <Button
              style={{ width: "50%", background: "rgb(234,235,238)" }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              style={{
                width: "50%",
                background: "rgb(0,122,255)",
                color: "white",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <Drawer open={add}>
        <div style={{ width: "94%", marginLeft: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Form</span>
            <IconButton style={{ background: "D4E7FF" }}>
              <img src={Close} />
            </IconButton>
          </div>
          <div style={{ marginTop: "1rem", marginRight: "1rem" }}>
            <div>
              <TextField
                id="outlined-basic"
                label="Product Name"
                size="small"
                variant="outlined"
                onChange={NameChange}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Description"
                size="small"
                variant="outlined"
                style={{ marginTop: "0.8rem" }}
                onChange={DiscriptionChange}
                fullWidth
                multiline
              />
              <TextField
                id="outlined-basic"
                label="Price"
                size="small"
                variant="outlined"
                style={{ marginTop: "0.8rem" }}
                onChange={PriceChange}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Discount"
                size="small"
                variant="outlined"
                style={{ marginTop: "0.8rem" }}
                onChange={DiscountChange}
                fullWidth
                multiline
              />
              <FormControl
                style={{ marginTop: "0.8rem" }}
                className="selectInput"
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={11}
                  variant="outlined"
                  onChange={AvalableChange}
                >
                  <MenuItem value={11}>Select Avalability</MenuItem>
                  <MenuItem value="Avalable">Avalable</MenuItem>
                  <MenuItem value="Not Avalable">Not Avalable</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: "0.8rem" }}>
              <span>Upload Image</span>
              <div
                style={{
                  border: "1px dashed",
                  width: "50px",
                  marginTop: "0.3rem",
                }}
              >
                <IconButton style={{ margin: "0px auto" }}>
                  <img src={Plus} />
                </IconButton>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "0px" }}>
            <Button
              variant="outlined"
              style={{ marginRight: "1rem" }}
              onClick={() => setAdd(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              style={{ background: "#007AFF", color: "white" }}
              onClick={Save}
            >
              Save
            </Button>
          </div>
        </div>
      </Drawer>
    </Container>
  );
};
export default ListData;
