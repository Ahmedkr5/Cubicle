import React, { Component } from 'react';
import { Typography, Container, useScrollTrigger } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import { useApi } from '../../hooks/useApi';
import { createBrowserHistory } from 'history';
import { useParams } from 'react-router';
import { Filter } from '@material-ui/icons';
import MessageService from '../../services/MessageService';
import authService from '../../services/auth.service';
import axios from 'axios';
// import { Promise } from "mongoose";
import MenuFr from './MenuFr';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const history = createBrowserHistory();
const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({
  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',

    cursor: 'pointer',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(2),
    flexDirection: 'column',
  },
  margin2: {
    margin: theme.spacing(2),
  },
}));

export default class Friendsdiv extends Component {
  /*const users2 = axios
  .get("http://localhost:3001/users/", {})
  .then(response=> {
   
  });*/
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount() {
    let users2 = axios
      .get('http://localhost:3001/users/', {})
      .then(function (response) {
        return response.data;
      });

    users2.then((friends) => {
      this.setState(
        {
          friends: friends,
        },
        () => {
          console.log('users:', this.state.friends);
          console.log('friends:', this.props.friends);
        }
      );
    });
  }

  // const [userProf, err1, reload1] = useApi('allUsers/' );

  //useEffect(async () => {setUsers(users3?.Filter(u=>(u._id)))},[props.member]);

  render() {
    const { friends } = this.state;
    const currentuser = authService.getCurrentUser();

    return (
      <>
        <div style={{ height: '500px' }}>
          <List style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            {friends
              ?.filter((m) => this.props.friends.includes(m._id))
              .map((msg) => (
                <ListItem style={{ flex: '50%', width: '100%' }}>
                  <Avatar
                    style={{
                      marginTop: '10px',
                      color: '#fff',
                      height: '80px',
                      width: '80px',
                    }}
                    aria-label='recipe'
                    variant='rounded'
                    src={
                      'http://localhost:3001/uploads/' +
                      msg.profileimage
                    }
                  ></Avatar>

                  <Typography
                    style={{
                      display: 'flex',
                      margin: '2px',
                      flexDirection: 'column',
                    }}
                  >
                    <Link
                      style={{
                        fontWeight: 'bold',
                        color: '#050505',
                        textAlign: 'center',
                      }}
                      onClick={() => {
                        history.push('/Profile/' + msg._id);
                        window.location.reload();
                      }}
                    >
                      {' '}
                      {msg.firstname} {msg.lastname}
                    </Link>
                    <Link
                      href='#'
                      onClick={preventDefault}
                      style={{ fontSize: '12px', color: 'grey' }}
                    >
                      Last active 2 days ago
                    </Link>
                  </Typography>
                  <div>
                    <br></br>

                    <MenuFr
                      id={msg?._id}
                      friends={msg?.friends}
                      myfriends={this.props?.friends}
                    ></MenuFr>
                  </div>
                </ListItem>
              ))}
          </List>
        </div>
      </>
    );
  }
}
