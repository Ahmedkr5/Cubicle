import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import authService from "../../services/auth.service";
import { green} from '@material-ui/core/colors';
import { useApi } from "../../hooks/useApi";
import Req from './Req'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1877F2',
    }
  },
});



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },

  avatar: {
    backgroundColor: green[500],
  },

  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: green[500],
    cursor: 'pointer',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


const StyledBadge = withStyles((theme) => ({
  badge: {
    left: '190%',
    top: '50%',

    border: '3px solid',
    borderColor: '#F8FAFB',
    padding: '0px',
    borderRadius: '15px',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

}))(Badge);

//Onclick on badge ,colors,remove caps on buttons



export default function FriendReq() {
  const classes = useStyles();
  const currentuser = authService.getCurrentUser() ;
  const [userReq, err1, reload1] = useApi('users/'+ currentuser['id']);
 

  return (<>
    <div className={classes.root} style={{ marginTop: '10px', flexDirection: 'column' ,height:'30%'}}>
      <MuiThemeProvider theme={theme}>
        <div style={{display:'flex', flexDirection:'row',justifyContent: 'space-between' }}>
            <div  >

              <Typography style={{ color: 'grey', fontSize: '12', fontWeight: 'bold' }} align='left'>REQUESTS</Typography>
            </div>
            <StyledBadge badgeContent={2} color="primary" style={{ marginRight:'50px'}}>

          </StyledBadge>
        </div>


        <Req requests={currentuser['id']}></Req>
   


      </MuiThemeProvider>
    </div>




  </>
  );





}