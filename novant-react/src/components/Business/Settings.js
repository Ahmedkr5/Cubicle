import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
                    <FormControlLabel
                        control={<Switch color="primary"/>}
                    />
                    <ListItemText inset primary="Allow members to create new posts" />
                </ListItem>
                <ListItem button>
                    <FormControlLabel
                        control={<Switch color="primary"/>}
                    />
                    <ListItemText inset primary="Allow members to comment on posts" />
                </ListItem>
                <ListItem button>
                    <FormControlLabel
                        control={<Switch color="primary"/>}
                    />
                    <ListItemText inset primary="Make business invisible" />
                </ListItem>
        </List>
    );
}