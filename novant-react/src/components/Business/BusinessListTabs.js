import React from "react";
import {
  Typography,
  Container,
  Modal,
  Fade,
  Card,
  CardMedia,
  Backdrop,
} from "@material-ui/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useState } from "react";
import BusinessList from "./BusinessList";
import InvitationsList from "./InvitationsList";
import Button from "@material-ui/core/Button";
import BusinessCreate from "./businessCreate";
import MyBusinessList from "./MyBusinessesList";
import authService from "../../services/auth.service";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "700px",
    width: "900px",
    backgroundColor: theme.palette.background.paper,
    border: "2px  #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function BusinessListTabs() {
  const classes = useStyles();
  const [state, setState] = useState("0");
  const [value, setValue] = React.useState(0);
  const [create, setCreate] = useState("0");
  const [open, setOpen] = React.useState(false);
  const currentuser = authService.getCurrentUser();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Container
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "50px",
            }}
          >
            <div>
              <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                showLabels
                style={{ marginBottom: "10px", borderRadius: "10px" }}
              >
                <BottomNavigationAction
                  onClick={() => setState("0")}
                  label="Businesses"
                />
                <BottomNavigationAction
                  onClick={() => setState("1")}
                  label="My Businesses"
                />
                <BottomNavigationAction
                  onClick={() => setState("2")}
                  label="Requests"
                />
              </BottomNavigation>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{height:'50%', top: '30%'}}
              onClick={() => {
                setOpen(true);
              }}

            >
              Create
            </Button>

            <Modal
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div
                  className={classes.paper}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div style={{ width: "100%", height: "100%" }}>
                    <div style={{ position: "relative", top: "25%" }}>
                      {" "}
                      <div style={{ textAlign: "center", marginRight: "80px" }}>
                        <h2>Create a business</h2>
                      </div>
                      <div style={{ textAlign: "center", width: "80%" }}>
                        <BusinessCreate></BusinessCreate>
                      </div>
                      <div style={{ textAlign: "center" }}></div>
                    </div>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Card style={{ width: "100%", height: "100%" }}>
                      <CardMedia
                        style={{ width: "100%", height: "100%" }}
                        className={classes.media}
                        image="../assets/images/groups/group.png"
                        title="Create a business"
                      />
                    </Card>
                  </div>
                </div>
              </Fade>
            </Modal>

            <div
              className={classes.search}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                style={{ width: "auto" }}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", flexFlow: "wrap" }}
          >
            {state == "0" && <BusinessList></BusinessList>}
            {state == "1" && <MyBusinessList></MyBusinessList>}
            {state == "2" && (
              <InvitationsList requests={currentuser["id"]}></InvitationsList>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
