import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import authService from "../../services/auth.service";
import React, { useState } from 'react';
import groupService from "../../services/group-service";
import SettingsIcon from '@material-ui/icons/Settings';
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

export default function GroupCard(props) {
  const classes = useStyles();
  const currentuser = authService.getCurrentUser() ;
  console.log(currentuser['id']);
  console.log(props?.owner);
  console.log(props?.grpid);
  console.log(props?.groupimage);
  var coverimage ="http://localhost:3001/uploads/"+props.groupimage
  const [CoverImage, setCoverImage] = useState('');
  const [selectedCoverImage, setselectedCoverImage] = useState(null);
  
  const onChangeHandler = event => {
    setselectedCoverImage(event.target.files[0])
    setCoverImage((event.target.files[0].name))
    console.log(event.target.files)
      const data = new FormData()
      data.append('file', event.target.files[0])
      var randomstring = require("randomstring");
      var date = randomstring.generate();
      console.log(event.target.files[0])
      axios.post("http://localhost:3001/upload/" + date, data, {
      });
      groupService.editgroupimage(date + '-' + event.target.files[0].name,props.grpid)
      .then(
        () => {
          window.location.reload();
        });
    
    
  }







  return (
    <>
    <Card elevation={0} style={{    borderRadius: '10px' , marginBottom:"10px" ,marginTop:"15px"}}>
    <CardMedia
          className={classes.media}
          image={coverimage}
          
        />
 
     
        <CardContent style={{display: 'flex',flexDirection:'row', alignItems:'center' }}>
  
        <Typography variant="h4" style={{width:'100%' ,textAlign:'center'}}>{props?.nom}</Typography>
        {currentuser['id'] !== props?.owner &&
        <Button  
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={< AddIcon/>}
          >
           send a Request 
          </Button>
}
{currentuser['id'] === props?.owner &&
   <>
   <input
     accept="image/*"
     style={{ display: 'none'}}
     id="raised-button-file"
     multiple
     type="file"
     onChange={onChangeHandler}
   />
   <label htmlFor="raised-button-file">
     <Button style={{backgroundColor:'black',color:'white',opacity:0.5}}         
    component="span"
    startIcon={<SettingsIcon/>} >
       
     </Button>
   </label> </>
  }
        </CardContent>

    </Card>
    <div className='container' id='global'>
       
              
           
        </div>
    </>
    
  );
}
