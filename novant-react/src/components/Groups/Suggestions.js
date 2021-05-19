import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardMedia, Paper, Typography, withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { Close } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
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
  
 



  export default function  Suggestions(props) {
    const classes = useStyles();
return(<>
      <Paper elevation={0} style={{marginTop:'30px',background:'white',borderRadius:'10px',height:'100%',width:'100%'}}>

<Container style={{width:'100%',paddingRight:'0px',paddingLeft:'0px'}}>      
          <ListItem style={{display:'flex',flexDirection:'column',paddingTop:'0px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Card style={{width:'100%',borderStyle:'none',paddingTop:'0px',paddingRight:'0px',paddingLeft:'0px'}}>
      
        <CardMedia
          className={classes.media}
          image={"http://localhost:3001/uploads/"+props.image}
          style={{width:'100%',height:'400px',marginTop:'0px',paddingTop:'0px',paddingRight:'0px',paddingLeft:'0px',marginRight:'0px',marginLeft:'0px'}}
          title="Hiking and Backpacking"
        />
 
        </Card>
       
        <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
    <div>    <Typography style={{color:"black",fontWeight:'bold'}}variant="h6" component="h2" >
    <Link href="./GroupProfile">{props.title}</Link>   
           </Typography></div>
        <Button variant="contained" color="primary"style={{borderRadius:'12px'}} 
        >
  Request to join
</Button>

      </div>
              </ListItem>

              
         
          </Container>
                
          </Paper>
  </>
);





}