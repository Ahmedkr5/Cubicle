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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#2A55C2',
    borderRadius: '10px',
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
    color: '#2A55C2',
    marginLeft: '1%',
  },
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: fade('#E9EBF1', 0.5),
    '&:hover': {
      backgroundColor: fade('#E9EBF1', 1),
    },
    marginLeft: 0,
    width: '100%',
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
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="fixed" className={classes.AppBar}>
        <Toolbar>
        <Avatar alt="Logo" src="../assets/images/randomlogo.png" />
          <Typography style={{textAlign:'left'}} className={classes.title} variant="h6" noWrap>
            Cubicle
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<AddBoxOutlinedIcon />}
          >
          Create
          </Button>
          <Avatar alt="Profile Avatar" src="../assets/images/Imed.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
}