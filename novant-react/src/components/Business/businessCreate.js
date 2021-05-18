
import { Input } from '@material-ui/core';
import setState  from "react";
import authService from '../../services/auth.service';
import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import businessservice from '../../services/business-service';
import CheckButton from 'react-validation/build/button';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

var user 
var userid 
const required = (value2) => {
  if (!value2) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    );
  }};

  export default class Businesscreate extends Component {

    constructor(props) {
        user = authService.getCurrentUser() ;
        userid = user['id'];
      super(props);
      this.handleCreate = this.handleCreate.bind(this);
      this.onChangebusinessname = this.onChangebusinessname.bind(this);
  
      this.state = {
        groupname: '',
        
        loading: false,
        message: '',
      };
 
    }


    
    onChangebusinessname(e) {
        this.setState({
            businessname: e.target.value,
        });
      }
     

    handleCreate(e) {
        e.preventDefault();
   
    
    this.form.validateAll();
  
    if (this.checkBtn.context._errors.length === 0) {
       
        businessservice.addbusiness(this.state.businessname, userid,userid ).then(
          () => {
            history.push('/Business');
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              loading: false,
              message: resMessage,
            });
          }
        );
      } else {
        this.setState({
          loading: false,
        });
      }
    }
  
    render() {
        
      return ( <> 
      

      <Form
        onSubmit={this.handleCreate}
        ref={(c) => {
          this.form = c;
        }}
      > <br></br><br></br>
        <div className='form-group'>
          
          <Input
            
            type='text'
            className='form-control'
            name='Businessname'
            value={this.state.businessname}
            onChange={this.onChangebusinessname}
            validations={[required]}
          />
        </div>
     
        <div className='form-group'>
              <button
                className='btn btn-primary btn-block'
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className='spinner-border spinner-border-sm'></span>
                )}
                <span>Create</span>
              </button>
            </div>

            {this.state.message && (
              <div className='form-group'>
                <div className='alert alert-danger' role='alert'>
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: 'none' }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form></>
        );
      }}