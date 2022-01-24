import React, { Component } from 'react';
import { Typography, Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import authService from '../../services/auth.service';

const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: green[500],
    cursor: 'pointer',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: '190%',
    top: '50%',

    border: '3px solid',
    borderColor: '#F8FAFB',
    padding: '0px',
    borderRadius: '15px',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}))(Badge);

export default class GroupInvitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      requests: [],
      members: [],
      idgroup: '',
    };
  }
  componentDidMount() {
    let users2 = axios
      .get('https://the-cubicle.herokuapp.com/users/', {})
      .then(function (response) {
        return response.data;
      });

    users2.then((users) => {
      this.setState(
        {
          users: users,
        },
        () => {
          console.log('test1', this.state.users);
        }
      );
    });
    let reqs = axios
      .get('https://the-cubicle.herokuapp.com/users/' + this.props.requests, {})
      .then(function (response) {
        return response.data;
      });
    reqs.then((requests) => {
      this.setState({ requests: requests }, () => {
        console.log('statereq:', this.state.requests.groupRequests);
      });
    });
  }
  render() {
    const { users, requests } = this.state;
    const currentuser = authService.getCurrentUser();

    return (
      <>
        {users
          ?.filter((m) => requests?.groupRequests?.includes(m._id))
          .map((msg) => (
            <Paper
              elevation={0}
              style={{
                marginTop: '15px',
                background: 'white',
                borderRadius: '10px',
                height: '150px',
              }}
            >
              <Container style={{ marginTop: '15px' }}>
                <List>
                  <>
                    <ListItem style={{ display: 'flex', flexDirection: 'row' }}>
                      <Avatar
                        style={{
                          marginRight: '10px',
                          color: '#fff',
                          height: '50px',
                          width: '50px',
                        }}
                        aria-label='recipe'
                        variant='rounded'
                        src={
                          'https://the-cubicle.herokuapp.com/uploads/' +
                          msg.profileimage
                        }
                      ></Avatar>
                      <Typography style={{ color: 'primary' }}>
                        <Link
                          href='#'
                          onClick={preventDefault}
                          style={{ fontWeight: 'bold' }}
                        >
                          {msg.firstname} {msg.lastname}
                        </Link>{' '}
                        wants to Join your group
                      </Typography>
                    </ListItem>

                    <ListItem style={{ display: 'flex', flexDirection: 'row' }}>
                      <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        style={{ borderRadius: '12px' }}
                        onClick={() => {
                          this.setState((state) => {
                            const list = state.requests?.groupRequests?.filter(
                              (i) => i !== msg._id
                            );
                            axios.put(
                              'https://the-cubicle.herokuapp.com/users/grp/' +
                                currentuser['id'],
                              {
                                groupRequests: list,
                              }
                            );
                            let users3 = axios
                              .get(
                                'https://the-cubicle.herokuapp.com/groups/groupowned/' +
                                  currentuser['id'],
                                {}
                              )
                              .then(function (response) {
                                return response.data;
                              });
                            users3
                              .then((members) => {
                                this.setState(
                                  {
                                    members: members[0].members,
                                    idgroup: members[0]._id,
                                  },
                                  () => {
                                    console.log('memberid', this.state.idgroup);
                                    console.log('memberid', this.state.members);
                                  }
                                );
                              })

                              .then(() => {
                                this.setState((state) => {
                                  const member = [...state.members, msg._id];
                                  axios
                                    .put(
                                      'https://the-cubicle.herokuapp.com/groups/groupmem/' +
                                        this.state.idgroup,
                                      {
                                        members: member,
                                      }
                                    )
                                    .then(() => {
                                      window.location.reload();
                                    });
                                });
                              });
                          });
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        variant='outlined'
                        size='large'
                        style={{ marginLeft: '32px', borderRadius: '12px' }}
                        onClick={() => {
                          this.setState((state) => {
                            const list = state.requests?.groupRequests?.filter(
                              (i) => i !== msg._id
                            );
                            axios
                              .put(
                                'https://the-cubicle.herokuapp.com/users/grp/' +
                                  currentuser['id'],
                                {
                                  groupRequests: list,
                                }
                              )
                              .then(() => {
                                window.location.reload();
                              });
                          });
                        }}
                      >
                        Decline
                      </Button>
                    </ListItem>
                  </>
                </List>
              </Container>
            </Paper>
          ))}
      </>
    );
  }
}
