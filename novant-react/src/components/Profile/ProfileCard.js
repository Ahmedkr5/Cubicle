import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge, Divider } from '@material-ui/core';
import UIAvatar from 'react-ui-avatars';




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
  var profileimage ="http://localhost:3001/uploads/"+props.profileimage
  var coverimage ="http://localhost:3001/uploads/"+props.coverimage
  var name = props.firstname+" "+props.lastname
  console.log(props.coverimage)
  return (
    <>
    <Card elevation={0} style={{    borderTopRightRadius:"15px",borderTopLeftRadius:"15px",marginTop:"15px"}}>
        <CardMedia
          className={classes.media}
          image={coverimage}
          title="Contemplative Reptile"
        />
        <CardContent style={{display: 'flex',flexDirection:'row', alignItems:'center' ,marginTop:'-100px',float:'left',marginLeft:'100px'}}>
        <Badge badgeContent={"Level 10"} color="primary">
        {props.profileimage=="default profile image" && <UIAvatar name={name} className={classes.rad} color='#551a8b' ></UIAvatar>}
        {props.profileimage !=="default profile image" && <Avatar src={profileimage} className={classes.rad} color='#551a8b' ></Avatar>}
        
        </Badge>
        <Typography variant="h4" style={{marginTop:'85px',marginLeft:'85px'}}>{props.firstname} {props.lastname}</Typography>
        </CardContent>

    </Card>
    <Divider variant="middle" />
    <div className='container' id='global'>
    </div>

    
    </>
    
  );
}