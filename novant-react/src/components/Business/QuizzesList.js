import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function QuizzesList() {
    const classes = useStyles();

    return (
      <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem button>
              <ListItemText inset primary="C++ Level 1" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Edit
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  View Results
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Share
              </Button>
          </ListItem>
          <ListItem button>
              <ListItemText inset primary="C++ Level 2" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Edit
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  View Results
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Share
              </Button>
          </ListItem>
          <ListItem button>
              <ListItemText inset primary="C++ Level 3" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Edit
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  View Results
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Share
              </Button>
          </ListItem>
          <ListItem button>
              <ListItemText inset primary="Python Level 5" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Edit
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  View Results
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Share
              </Button>
          </ListItem>
      </List>
    );
}