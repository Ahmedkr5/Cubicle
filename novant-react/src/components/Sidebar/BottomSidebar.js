import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardMedia, Paper, Typography, withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { Close } from '@material-ui/icons';
import GroupInvitation from '../Groups/GroupInvitation';


const StyledBadge = withStyles((theme) => ({
    badge: {
        left : '150%',
        top: '50%',
        
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      borderRadius :'15px',
      width: theme.spacing(4),
    height: theme.spacing(4),
    },
  }))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
    background: "red",
  },
  drawerContainer: {
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));

export default function BottomSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:'10px',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <CssBaseline />
      <div className={classes.root} style={{marginTop:'10px',alignItems:'left',justifyContent:'left',flexDirection:'row'}}>
                
      <div>
      <StyledBadge badgeContent={4} color="secondary">
      <div style={{marginLeft:'-100%'}}>
      
      <Typography style={{color:'grey'}} variant="h6">Invitations</Typography>
      </div>
        </StyledBadge>
      </div>
      </div>

    
    </div>
  );
}
