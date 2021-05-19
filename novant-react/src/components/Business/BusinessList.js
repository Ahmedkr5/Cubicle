import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import BusinessService from "../../services/business-service.js";
import { useApi } from "../../hooks/useApi";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BusinessList() {
  const classes = useStyles();
  const [business, err, reload] = useApi("business/businesslist");
  //const [business, setBusiness] = useState(BusinessService.getAll());

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {business?.map((msg, index) => (
        <ListItem button>
          <Link
            onClick={() => {
              history.push("/BusinessProfile/" + msg._id);

              window.location.reload();
            }}
            style={{ fontWeight: "bold", color: "#050505" }}
          >
            {msg.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
