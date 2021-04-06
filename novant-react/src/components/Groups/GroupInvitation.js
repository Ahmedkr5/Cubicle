import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardMedia, Paper, Typography, withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { Close } from '@material-ui/icons';

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

 



  export default function  GroupInvitation() {
    const classes = useStyles();
return(<>
      <Paper elevation={0} style={{marginTop:'10px',background:'white',borderRadius:'10px',height:'100%'}}>

<Container style={{width:'100%',paddingRight:'0px',paddingLeft:'0px'}}>      
          <ListItem style={{display:'flex',flexDirection:'column',paddingTop:'0px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Card style={{width:'100%',borderStyle:'none',paddingTop:'0px',paddingRight:'0px',paddingLeft:'0px'}}>
      
        <CardMedia
          className={classes.media}
          image="images/cover.png"
          style={{width:'100%',height:'250px',marginTop:'0px',paddingTop:'0px',paddingRight:'0px',paddingLeft:'0px',marginRight:'0px',marginLeft:'0px'}}
          title="Group Invitation"
        />

        </Card>
        <Typography style={{marginTop:"-50px",color:"white"}} variant="h5" component="h2">
            Group Invitation
          </Typography>
        <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row", marginTop:"50px",flexBasis:'70%',paddingRight:'24px',paddingLeft:'24px'}}>
         
        <Button variant="contained" color="primary"style={{borderRadius:'12px'}}>
  Accept invitation
</Button>
<Button variant="outlined"   className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px',padding:'0px'}}>
          <Close fontSize="small"></Close>
        </Button>
      </div>
              </ListItem>

              
         
          </Container>
                
          </Paper>
  </>
);





}