import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { shadows } from '@material-ui/system';
import authService from '../../services/auth.service';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useApi } from '../../hooks/useApi';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: '10px',
    backgroundColor: '#1877F2',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#1877F2',
    },
  },
  AppBar: {
    backgroundColor: '#FCFCFD',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: '#000',
    marginLeft: '0%',
    cursor: 'pointer',
  },
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: fade('#E9EBF1', 0.5),
    '&:hover': {
      backgroundColor: fade('#E9EBF1', 1),
    },
    marginLeft: 0,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9A9A9A',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
  logoBtn: {
    cursor: 'pointer',
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const logout = () => {
  authService.logout();
  window.location.replace('/auth');
};

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

export default function SearchAppBar(props) {
  const handleKeyPress = (event) => {
    document.getElementById('result').innerHTML = '';
    if (event.keyCode == 8) {
      var a = document
        .getElementById('search')
        .value.substr(0, document.getElementById('search').value.length - 1);
    } else {
      var a = document.getElementById('search').value + event.key;
    }
    document.getElementById('result').innerHTML = '';

    var data = axios
      .get('https://the-cubicle.herokuapp.com/users/a/' + a, {})
      .then(function (response) {
        return response.data;
      });
    var i = -1;
    data.then((value) => {
      value.forEach((element) => {
        i++;
        document.getElementById('result').innerHTML =
          document.getElementById('result').innerHTML +
          "<a class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button' tabindex='" +
          i +
          "' aria-disabled='false' href='http://localhost:3000/profile/" +
          element._id +
          "'><div class='MuiListItemText-root'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'>" +
          element.firstname +
          ' ' +
          element.lastname +
          "</span></div><span class='MuiTouchRipple-root'></span></a><hr class='MuiDivider-root'>";
      });
      if (i == -1) {
        document.getElementById('result').innerHTML =
          document.getElementById('result').innerHTML +
          "<a class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button' tabindex='" +
          0 +
          "' aria-disabled='false' ><div class='MuiListItemText-root'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'>No User Found</span></div><span class='MuiTouchRipple-root'></span></a><hr class='MuiDivider-root'>";
      }
    });
  };
  const classes = useStyles();
  const user = authService.getCurrentUser();
  const name = user?.firstname + ' ' + user?.lastname;

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position='fixed' className={classes.AppBar}>
        <Toolbar>
          <Avatar
            className={classes.logoBtn}
            alt='Logo'
            src='../assets/images/randomlogo.png'
            onClick={() => window.location.replace('/')}
          />
          <Typography
            style={{ textAlign: 'left' }}
            onClick={() => window.location.replace('/')}
            className={classes.title}
            variant='h6'
            noWrap
          >
            Cubicle
          </Typography>
          <div >
            <div className={classes.search} style={{ zIndex: 1 }}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                autocomplete='off'
                onKeyDown={handleKeyPress}
                id='search'
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div
              id='response'
              style={{
                zIndex: 0,
                position: 'absolute',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              <List
                component='nav'
                id='result'
                style={{ backgroundColor: 'LightGray' }}
              ></List>
            </div>
          </div>

          <Button
            variant='contained'
            size='small'
            className={classes.button}
            startIcon={<AddBoxOutlinedIcon />}
            onClick={logout}
          >
            Logout
          </Button>
          <Avatar
            className={classes.avatar}
            name={name}
            alt={name}
            variant='rounded'
            src={
              'https://the-cubicle.herokuapp.com/uploads/' + user?.profileimage
            }
            onClick={() => window.location.replace(`/profile/${user?.id}`)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
