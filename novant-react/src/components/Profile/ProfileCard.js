import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge } from '@material-ui/core';
import AuthService from "../../services/auth.service";

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();
  return (
    <Card elevation={0} style={{    borderRadius: '10px' , marginBottom:"10px" ,marginTop:"15px"}}>
        <CardMedia
          className={classes.media}
          image="images/cover.png"
          title="Contemplative Reptile"
        />
        <CardContent style={{display: 'flex',flexDirection:'column', alignItems:'center' ,marginTop:'-150px'}}>
        <Badge badgeContent={"Level 10"} color="primary">
        <Avatar alt="Bayrem Zguimi" src="images/avatar.jpg" style={{width:'150px',height:'150px'}} />
        </Badge>
        <Typography variant="h4">{props.firstname} {props.lastname}</Typography>
        </CardContent>
    </Card>
  );
}