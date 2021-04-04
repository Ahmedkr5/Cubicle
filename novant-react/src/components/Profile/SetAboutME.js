import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { Label } from "@material-ui/icons";

function SetAboutME() {
  return (
    
      <Card>
        <CardContent>
          <Formik
            initialValues={{ birthday :"" ,firstname :"" , lastname :"" , email :"", password :"" , profileimage :"" , coverimage :"" ,adresse: "", phone: '', description: "" }}
            validationSchema={Yup.object().shape({
              birthday: Yup.string().required("birthday is Required"),
              firstname: Yup.string().required("firstname is Required"),
              lastname: Yup.string().required("lastname is Required"),
              email: Yup.string().required("email is Required"),
              password: Yup.string().required("password is Required"),
              profileimage: Yup.string().required("profileimage is Required"),
              coverimage: Yup.string().required("coverimage is Required"),
              adresse: Yup.string().required("Adresse is Required"),
              phone: Yup.number().required("Phone is Required").min(18, "only +18"),
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
              
              <Form onSubmit={handleSubmit} isSubmitting={isSubmitting}
              validateField={validateField}
              errors={errors}
              touched={touched}>
                
                <Grid container spacing={2} > 
                  
                <Grid item xs={12} md={3}>
                <Label/><Typography>First Name :</Typography>     
                </Grid>    
                
                <Grid item xs={12} md={9}>
                  <Field
                  style={{width:"100%"}}
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    placeholder="Your Firstname"
                    component={TextField}
                    error={errors.firstname ? true : false}
                    helperText={errors.firstname && errors.firstname}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                  <Grid item xs={12} md={3}>
                <Label/><Typography>Last Name :</Typography>     
                </Grid> 
                  
                  <Grid item xs={12} md={9}>
                  <Field
                  style={{width:"100%"}}
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    placeholder="Your Lastname"
                    component={TextField}
                    error={errors.lastname ? true : false}
                    helperText={errors.lastname && errors.lastname}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>


                  <Grid item xs={12} md={3}>
                <Label/><Typography>Password :</Typography>     
                </Grid>      
                

                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                    label="password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Your password"
                    component={TextField}
                    error={errors.password ? true : false}
                    helperText={errors.password && errors.password}
                  />
                  
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                  <Grid item xs={12} md={3}>
                <Label/><Typography>Cover Image :</Typography>     
                </Grid>      
                
                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                    label="coverimage"
                    type="file"
                    name="coverimage"
                    id="coverimage"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.coverimage}
                    placeholder="Your coverimage"
                    component={TextField}
                    error={errors.coverimage ? true : false}
                    helperText={errors.coverimage && errors.coverimage}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>
                
                  <Grid item xs={12} md={3}>
                <Label/><Typography>Profile Image :</Typography>     
                </Grid>      
                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                    label="profileimage"
                    type="file"
                    name="profileimage"
                    id="profileimage"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.profileimage}
                    placeholder="Your profileimage"
                    component={TextField}
                    error={errors.profileimage ? true : false}
                    helperText={errors.profileimage && errors.profileimage}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>
                  <Grid item xs={12} md={3}>
                <Label/><Typography>Email :</Typography>     
                </Grid>   
                
                  <Grid item xs={12} md={9}>
                     
                  <Field
                  style={{width:"100%"}}
                    label="email"
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Your email"
                    component={TextField}
                    error={errors.email ? true : false}
                    helperText={errors.email && errors.email}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                  <Grid item xs={12} md={3}>
                <Label/><Typography>Adresse :</Typography>   
                  
                </Grid>   
                

                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                    label="adresse"
                    type="text"
                    name="adresse"
                    id="adresse"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.adresse}
                    placeholder="Your adresse"
                    component={TextField}
                    error={errors.adresse ? true : false}
                    helperText={errors.adresse && errors.adresse}
                  />
                  </Grid>
                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>
                  <Grid item xs={12} md={3}>
                <Label/><Typography>Phone :</Typography>     
                </Grid>   
                

                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                  label="phone"
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Your phone"
                    component={TextField}
                    error={errors.phone ? true : false}
                    helperText={errors.phone && errors.phone}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                  <Grid item xs={12} md={3}>
                <Label/><Typography>Birthday :</Typography>     
                </Grid>   
                
                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                    label="birthday"
                    type="date"
                    name="birthday"
                    id="birthday"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthday}
                    placeholder="Your birthday"
                    component={TextField}
                    error={errors.birthday ? true : false}
                    helperText={errors.birthday && errors.birthday}
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
                  style={{width:"100%"}}
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

                <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Confirm
        </Button>
        </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
              );

 
};

export default SetAboutME;