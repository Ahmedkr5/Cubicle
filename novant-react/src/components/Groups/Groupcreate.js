import axios from "axios";
import { Input } from '@material-ui/core';
import setState  from "react";
import authService from '../../services/auth.service';
import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import groupservice from '../../services/group-service';
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
  export default class Groupcreate extends Component {
   
    constructor(props) {
      super(props);
      this.handleCreate = this.handleCreate.bind(this);
      this.onChangegrpname = this.onChangegrpname.bind(this);
      this.onChangedescription = this.onChangedescription.bind(this);
       user = authService.getCurrentUser() ;
      userid = user['id'];
      this.state = {
        groupname: '',
        
        loading: false,
        message: '',
      };
 
    }
    onChangegrpname(e) {
        this.setState({
          groupname: e.target.value,
        });
      }
    onChangedescription(e) {
        this.setState({
          description: e.target.value,
        });
      }

    handleCreate(e) {
        e.preventDefault();
   
    
    this.form.validateAll();
  
    if (this.checkBtn.context._errors.length === 0) {
       
      axios.post("http://localhost:3001/groups/" + userid +"/newgroup", {
        groupname :this.state.groupname,
        description:this.state.description,
        Owner :userid})
        .then(response => {
         var dad =response.data['_id'];
         history.push('/GroupProfile/'+dad);
         window.location.reload();
        })
          
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
        <label>Group name</label>
          <Input
            
            type='text'
            className='form-control'
            name='Groupname'
            value={this.state.groupname}
            onChange={this.onChangegrpname}
            validations={[required]}
          />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <Input
            
            type='text'
            className='form-control'
            name='Description'
            value={this.state.description}
            onChange={this.onChangedescription}
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