import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import authService from '../../services/auth.service';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import groupService from '../../services/group-service';
import SettingsIcon from '@material-ui/icons/Settings';
import { useApi } from '../../hooks/useApi';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TimerIcon from '@material-ui/icons/Timer';
import Timer from '@material-ui/icons/Timer';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
  rad: {
    borderRadius: 20,
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default class Frbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      request: [],
    };

    console.log('el friends', this.props?.friends);
  }

  /*  componentDidMount() {
            let users2 = axios
              .get('https://the-cubicle.herokuapp.com/users/', {})
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
          }*/

  /*const handleAdd= (userid) => {
  
 setGroupreq(userProf?.groupRequests);
          
          console.log(groupreq);
         const newmem= groupreq.concat({userid :currentuser['id']}); 
         setGroupreq(newmem);
        console.log(groupreq);
//const friends =groupreq
//setGroupreq({ ...groupreq, list: newList });
  }*/

  render() {
    const currentuser = authService.getCurrentUser();

    const { user, request } = this.state;

    const userid = currentuser['id'];

    return (
      <>
        {this.props?.id !== currentuser['id'] &&
          this.props?.myfriends?.find((m) => m === this.props?.id) && (
            <Button
              variant='contained'
              color='secondary'
              size='small'
              onClick={() => {
                this.setState((state) => {
                  const nofr = this.props?.friends?.filter(
                    (i) => i !== currentuser['id']
                  );
                  const nofr2 = this.props?.myfriends?.filter(
                    (i) => i !== this.props?.id
                  );
                  axios.put(
                    'https://the-cubicle.herokuapp.com/users/fr/' +
                      this.props?.id,
                    {
                      friends: nofr,
                    }
                  );
                  axios
                    .put(
                      'https://the-cubicle.herokuapp.com/users/fr/' +
                        currentuser['id'],
                      {
                        friends: nofr2,
                      }
                    )

                    .then(() => {
                      window.location.reload();
                    });
                });
              }}
              startIcon={<PersonAddDisabledIcon />}
            >
              remove friend
            </Button>
          )}

        {this.props?.myfriends?.find((m) => m === this.props?.id) ||
        this.props?.id === currentuser['id'] ? (
          console.log('found it')
        ) : this.props?.friendRequests?.find((g) => g === currentuser['id']) ? (
          <Button
            variant='contained'
            startIcon={<Timer />}
            size='small'
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            friend request pending
          </Button>
        ) : (
          <Button
            variant='contained'
            color='primary'
            size='medium'
            onClick={() => {
              this.setState({
                request: this.props?.friendRequests,
              });
              this.setState((state) => {
                const frrequests = [...state.request, currentuser['id']];
                axios
                  .put(
                    'https://the-cubicle.herokuapp.com/users/frreq/' +
                      this.props?.id,
                    {
                      friendRequests: frrequests,
                    }
                  )
                  .then(() => {
                    window.location.reload();
                  });
              });
            }}
            startIcon={<AddIcon />}
          >
            Add Friend
          </Button>
        )}
      </>
    );
  }
}
