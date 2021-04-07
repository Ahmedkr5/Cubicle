import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


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
  return (
    <>
    <Card elevation={0} style={{    borderRadius: '10px' , marginBottom:"10px" ,marginTop:"15px"}}>
        <CardMedia
          className={classes.media}
          image="../assets/images/groups/python.png"
          title="Contemplative Reptile"
        />
        <CardContent style={{display: 'flex',flexDirection:'row', alignItems:'center' }}>
    
   
     
        <Typography variant="h4" style={{width:'100%' ,textAlign:'center'}}>Python Programming</Typography>
        <Button  
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={< AddIcon/>}
          >
           send a Request 
          </Button>
        </CardContent>

    </Card>
    <div className='container' id='global'>
       
              
           
        </div>
    </>
    
  );
}
