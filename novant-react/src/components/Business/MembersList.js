import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Settings() {
    const classes = useStyles();

    return (
      <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem button>
              <ListItemText inset primary="Ahmed Zeghibi" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Edit Role
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Kick
              </Button>
          </ListItem>
          <ListItem button>
              <ListItemText inset primary="Hamza Safraou" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Edit Role
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Kick
              </Button>
          </ListItem>
      </List>
    );
}