import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardMedia, Paper, Typography, withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { Close } from '@material-ui/icons';


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

      <Paper elevation={0} style={{marginTop:'10px',background:'white',borderRadius:'10px'}}>

<Container style={{width:'100%'}}>      
          <ListItem style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
          <Card style={{width:'100%',borderStyle:'none',paddingTop:'0px'}}>
      
        <CardMedia
          className={classes.media}
          image="images/cover.png"
          style={{width:'100%',height:'200px',marginTop:'0px',paddingTop:'0px'}}
          title="Group Invitation"
        />

        </Card>
        <Typography style={{marginTop:"-50px",color:"white"}} variant="h5" component="h2">
            Group Invitation
          </Typography>
        <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row", marginTop:"40px",flexBasis:'70%'}}>
         
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
    </div>
  );
}
