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

export default class grouppbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      user: [],
      members: [],
    };
  }
  componentDidMount() {
    let users2 = axios
      .get('https://the-cubicle.herokuapp.com/users/' + this.props.owner, {})
      .then(function (response) {
        return response.data;
      });

    users2.then((user) => {
      this.setState(
        {
          user: user,
        },
        () => {
          console.log('user:', this.state.user.groupRequests);
          console.log('owner:', this.props.owner);
        }
      );
    });
  }

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

    const { user, requests } = this.state;

    const userid = currentuser['id'];

    return (
      <>
        {this.props?.mem
          ?.filter((m) => m === currentuser['id'])
          .map((msg) => {
            if (msg === currentuser['id'] && msg !== this.props?.owner)
              return (
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  onClick={() => {
                    this.setState((state) => {
                      const newmem = this.props?.mem?.filter(
                        (i) => i !== currentuser['id']
                      );
                      axios
                        .put(
                          'https://the-cubicle.herokuapp.com/groups/groupmem/' +
                            this.props?.idgroup,
                          {
                            members: newmem,
                          }
                        )
                        .then(() => {
                          window.location.reload();
                        });
                      console.log(newmem);
                    });
                  }}
                  startIcon={<ExitToAppIcon />}
                >
                  leave group
                </Button>
              );
          })}

        {this.props?.mem.find((m) => m === currentuser['id']) ? (
          console.log('found it')
        ) : user?.groupRequests?.find((g) => g === currentuser['id']) ? (
          <Button
            variant='contained'
            startIcon={<Timer />}
            size='small'
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            membership pending
          </Button>
        ) : (
          <Button
            variant='contained'
            color='primary'
            size='medium'
            onClick={() => {
              this.setState({
                requests: user.groupRequests,
              });
              this.setState((state) => {
                const requests = [...state.requests, currentuser['id']];
                axios
                  .put(
                    'https://the-cubicle.herokuapp.com/users/grp/' +
                      this.props?.owner,
                    {
                      groupRequests: requests,
                    }
                  )
                  .then(() => {
                    window.location.reload();
                  });
              });
            }}
            startIcon={<AddIcon />}
          >
            send a Request
          </Button>
        )}
      </>
    );
  }
}
