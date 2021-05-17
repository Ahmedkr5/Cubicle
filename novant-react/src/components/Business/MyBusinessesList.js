import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import BusinessService from '../../services/business-service.js';

import Button from '@material-ui/core/Button';
import authService from '../../services/auth.service.js';
import { useApi } from '../../hooks/useApi.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MyBusinessesList() {
    const classes = useStyles();
    const user = authService.getCurrentUser();
    const userid = user["id"];

    const [business, err, reload] = useApi('business/businesslist/'+userid);

    return (
      <List component="nav" className={classes.root} aria-label="contacts">
        {business?.map((msg, index) => (
        <ListItem button>
          <ListItemText inset primary={msg.name} />
          <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Leave
          </Button>
        </ListItem>
      ))}
      </List>
    );
}