import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { Label } from "@material-ui/icons";
import experienceService from "../../services/experience.service";

function SetCV(props) {
  console.log(props.userid)
  return (

      <Card>
        <CardContent>
          <Formik
            initialValues={{ title: "", date: '', description: "" ,userid : props.userid}}
            validationSchema={Yup.object().shape({
              title: Yup.string().required("title is Required"),
              date: Yup.string().required("date is Required"),
              description: Yup.string().min(10),
            })}
            onSubmit={(values, { setSubmitting }) => {
              experienceService.add(values.title, values.description,values.date,values.userid).then(
                () => {
                  window.location.reload();
                });
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
              
              <Form onSubmit={handleSubmit} isSubmitting={isSubmitting}
              validateField={validateField}
              errors={errors}
              touched={touched}>
                 <Grid container spacing={2} > 
                  
                  <Grid item xs={12} md={3}>
                  <Label/><Typography>Title :</Typography>     
                  </Grid>    
                  
                  <Grid item xs={12} md={9}>
                  <Field
                    label="title"
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    placeholder="Your title"
                    component={TextField}
                    error={errors.title ? true : false}
                    helperText={errors.title && errors.title}
                  />
                    </Grid>
  
                    <Grid item xs={12} md={12}>
                  <Divider variant='fullWidth'/>
                  </Grid>
                
                  
                  <Grid item xs={12} md={3}>
                  <Label/><Typography>Date :</Typography>     
                  </Grid>    
                  
                  <Grid item xs={12} md={9}>
                  <Field
                    label="date"
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    placeholder="Your date"
                    component={TextField}
                    error={errors.date ? true : false}
                    helperText={errors.date && errors.date}
                  />
                    </Grid>
  
                    <Grid item xs={12} md={12}>
                  <Divider variant='fullWidth'/>
                  </Grid>

                  <Grid item xs={12} md={3}>
                  <Label/><Typography>Description :</Typography>     
                  </Grid>    
                  
                  <Grid item xs={12} md={9}>
                  <Field
                  label="description"
                    type="text"
                    name="description"
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder="Description"
                    component={TextField}
                    error={errors.description ? true : false}
                    helperText={errors.description && errors.description}
                  />
                    </Grid>
  
                    <Grid item xs={12} md={12}>
                  <Divider variant='fullWidth'/>
                  </Grid>

                  
                  
                  

                  </Grid>
                  
                <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Confirm
        </Button>
        
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
              );

 
};

export default SetCV;