import { BottomNavigation, BottomNavigationAction, Button, FormControlLabel, Link, makeStyles, Radio, RadioGroup, Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Particulier from "./Particulier";
import Entreprise from "./Entreprise";
import SignIn from "../Login/SignIn";
import { ContactsRounded, LockOpen } from "@material-ui/icons";
import { height } from "@mui/system";
import { FadeTransform } from 'react-animation-components';

const FormSteps = (props) => {
  const childrenArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(4);



  const goEntreprise = () => {
    if(childrenArr[0].props.children.props.value ==="Entreprise") {
      setStep(3);
    }else{
      setStep(2);
    }
  };
  const goLogin = () => {
    setStep(4);
  };
  const goReset = () => {
    setStep(1);
  };
  return (
    <>
      {childrenArr[step - 1]}
      {step === 1 && (
        <Button
          disabled={props.isSubmitting}
          variant="contained"
          onClick={goEntreprise}
        >
          Continue
        </Button>
      )}
      {step > 1 && step < 4 && (
        <Button
          disabled={props.isSubmitting}
          variant="contained"
          color="secondary"
          onClick={goReset}
        >
          Back
        </Button>
      )}
      {step > 1 && step < 4 && (
        <Button
          type="submit"
          disabled={props.isSubmitting}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      )}
      {step < 4 && (
        <Grid container>
            <Grid item>
              <Link onClick={goLogin} variant="body2">
                {"Have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
      )
      } 
      {step === 4 && (
        <Grid container>
            <Grid item>
              <Link onClick={goReset} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      )
      }
    </>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Cubicle
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
var divStyle = {
  marginRight: "500px"
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const [state, setState] = useState("0") 
  const [value, setValue] = React.useState(0);


  return (
    <div style={{ 
      backgroundImage: `url("http://localhost:3001/uploads/loginimg.jpg")` ,
      height:'100%'
    }}>
    <div style={{justifyContent:'center',alignItems: 'center',display:'flex'}}>
    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
    <Paper component="main"  style={{backgroundColor:'white',width:'450px',marginTop:'75px'}} >
      <CssBaseline />
      <div className={classes.paper}>
        
        <img src="https://img.icons8.com/officel/80/000000/sugar-cube.png" alt="Cubicle"/>
        <Typography component="h1" variant="h5">
              Cubicle
          </Typography>

      </div>
      
                  <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        
</div>

<BottomNavigation
   value={value}
   onChange={(event, newValue) => {
     setValue(newValue);
   }}
   showLabels
     style={{marginBottom:"10px" , borderBottomRightRadius:"15px",borderBottomLeftRadius:"15px" }}
    >
      <BottomNavigationAction onClick={()=>setState("0")} label="Login" icon={<LockOpen />} />
      <BottomNavigationAction onClick={()=>setState("1")} label="Register" icon={<ContactsRounded />} />
</BottomNavigation>

                  <div>

    {state == "0" &&  <SignIn></SignIn>}
    {state == "1" && <Particulier></Particulier>}
    
  </div>
  
               

          


      <Box mt={5}>
        <Copyright />
      </Box>
    </Paper></FadeTransform></div></div>
  );

}


export default SignUp;