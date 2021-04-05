import { Button, FormControlLabel, Link, makeStyles, Radio, RadioGroup, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Particulier from "./Particulier";
import Entreprise from "./Entreprise";
import SignIn from "../Login/SignIn";

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

  return (
    <Container component="main" maxWidth="xs"  >
      <CssBaseline />
      <div className={classes.paper}>
        
        <img src="https://img.icons8.com/officel/80/000000/sugar-cube.png" alt="Cubicle"/>
        <Typography component="h1" variant="h5">
              Cubicle
          </Typography>

      </div>
      <Formik
            initialValues={{role:"", name: "", age: 18, description: "" }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Name is Required"),
              role: Yup.string().required("Role is Required"),
              age: Yup.number().required("Age is Required").min(18, "only +18"),
              description: Yup.string().min(10),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              validateField,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className={classes.form}>
                <FormSteps
                  isSubmitting={isSubmitting}
                  validateField={validateField}
                  errors={errors}
                  touched={touched}
                >
                  
                  <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        
<RadioGroup aria-label="gender" name="role" id="role" value={values.role} onChange={handleChange} error={errors.name ? true : false} helperText={errors.name && errors.name} >
    <FormControlLabel style={{ width: 100 , divStyle }} value="Entreprise" control={<Radio />} label="Entreprise" />
    <FormControlLabel style={{ width: 100 , divStyle}} value="Particulier" control={<Radio  />} label="Particulier"/>
      </RadioGroup>
      
      

</div>


  <div>
    <Particulier></Particulier>
  </div>


                  <div>
                    <Entreprise></Entreprise>
                  </div>

                  <div>
    <SignIn></SignIn>
  </div>
                </FormSteps>
              </Form>
            )}
          </Formik>

          


      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );

}


export default SignUp;