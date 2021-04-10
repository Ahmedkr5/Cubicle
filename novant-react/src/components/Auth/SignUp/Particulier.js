import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AuthService from '../../../services/auth.service';
import Profile from '../../../Profile';
import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Button } from '@material-ui/core';
import authService from '../../../services/auth.service';
export const history = createBrowserHistory();
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    );
  }
};

export default class Particulier extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeNaissance = this.onChangeNaissance.bind(this);

    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      datenaissance:'',
      loading: false,
      message: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeNaissance(e) {
    this.setState({
      datenaissance: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: '',
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(this.state.firstname, this.state.lastname,this.state.email,this.state.password,this.state.datenaissance).then(
        () => {
          history.push('/login');
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
    return (
      <div className='col-md-12'>
        <div className='card card-container'>
          

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className='form-group'>
              <label htmlFor='username'>Email</label>
              <Input
                type='email'
                className='form-control'
                name='username'
                value={this.state.email}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='username'>Firstname</label>
              <Input
                type='text'
                className='form-control'
                name='firstname'
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                validations={[required]}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='username'>Lastname</label>
              <Input
                type='text'
                className='form-control'
                name='lastname'
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                validations={[required]}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='username'>Date de Naissance</label>
              <Input
                type='date'
                className='form-control'
                name='datenaissance'
                value={this.state.datenaissance}
                onChange={this.onChangeNaissance}
                validations={[required]}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <Input
                type='password'
                className='form-control'
                name='password'
                value={this.state.password}
                onChange={this.onChangePassword}
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
                <span>Register</span>
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
          </Form>
        </div>
      </div>
    );
  }
}
