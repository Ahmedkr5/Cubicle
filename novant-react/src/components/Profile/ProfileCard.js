import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge } from '@material-ui/core';
import AuthService from "../../services/auth.service";

const useStyles = makeStyles((theme)=>({
  media: {
    height: 250,
  },
  rad: {
    borderRadius: 20,
    width: theme.spacing(15),
    height: theme.spacing(15),



},
}));

export default function ProfileCard(props) {
  const classes = useStyles();
  return (
    <>
    <Card elevation={0} style={{    borderRadius: '10px' , marginBottom:"10px" ,marginTop:"15px"}}>
        <CardMedia
          className={classes.media}
          image="images/cover.png"
          title="Contemplative Reptile"
        />
        <CardContent style={{display: 'flex',flexDirection:'row', alignItems:'center' ,marginTop:'-100px',float:'left',marginLeft:'100px'}}>
        <Badge badgeContent={"Level 10"} color="primary">
        <Avatar alt="Bayrem Zguimi" src="images/avatar.jpg" className={classes.rad} />
        </Badge>
        <Typography variant="h4" style={{marginTop:'85px',marginLeft:'85px'}}>{props.firstname} {props.lastname}</Typography>
        </CardContent>

    </Card>
    <div className='container'>
            <div className='row d-flex flex-row-reverse' style={{marginRight:'25%'}}>
              

                <div className='col-3'  >
                <div id='global'  ></div>

                </div>
            </div>
        </div>
    </>
    
  );
}