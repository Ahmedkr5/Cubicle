import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BusinessAbout(props) {
    const classes = useStyles();

    return (
       <Container style={{borderRadius: '10px'  ,backgroundColor:"white",height:'200px'}}>
           <br></br><br></br>
           <h6>
                {props?.desc}
           </h6>
       </Container>
    );
}