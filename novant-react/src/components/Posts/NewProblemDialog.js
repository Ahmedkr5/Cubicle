import { Avatar, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CodeCore from './ProblemFeed/CodeCore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '15px',
    marginTop: '15px',
    backgroundColor: '#FFF',
    padding: '15px',
    marginLeft: 'auto',
    marginright: 'auto',
    width: '100%',
  },
  avatar: {
    backgroundColor: red[500],
  },
  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: red[500],
    cursor: 'pointer',
  },
  btn: {
    marginLeft: '15px',
    backgroundColor: '#F0F2F5',
    borderRadius: '15px',
    width: '100%',
    justifyItems: 'center',
  },
  formControl: {
    marginTop: '0px',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  p: {
    color: '#000',
    margin: '0px',
    padding: '0px',
    textAlign: 'left',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  },
  dialogAvatar: {
    marginTop: '5px',
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: red[500],
    cursor: 'pointer',
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentHeaderRight: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5px',
  },
  contentBodyBottom: {},
  contentFooter: {},
}));

const preventDefault = (event) => event.preventDefault();

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    textAlign: 'center',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6' className={classes.title}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  dividers: {
    marginLeft: '15px',
    marginRight: '15px',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function NewFeed() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    Type: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Avatar aria-label='recipe' variant='rounded' className={classes.rounded}>
        H
      </Avatar>
      <Button
        className={classes.btn}
        variant='outlined'
        onClick={handleClickOpen}
      >
        Express yourself
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        style={{ width: '100%' }}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Add a post
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.contentContainer}>
            <div className={classes.contentHeader}>
              <div>
                <Avatar
                  aria-label='recipe'
                  variant='rounded'
                  className={classes.dialogAvatar}
                >
                  H
                </Avatar>
              </div>
              <div className={classes.contentHeaderRight}>
                <a href='#' onClick={preventDefault} className={classes.p}>
                  <strong>
                    <span> Hamza Safraou </span>
                  </strong>
                </a>
                <FormControl className={classes.formControl}>
                  <Select
                    native
                    value={state.Type}
                    onChange={handleChange}
                    label='Type'
                    inputProps={{
                      name: 'Type',
                      id: 'PostType',
                    }}
                  >
                    <option value={'Feed'}>Feed</option>
                    <option value={'Problem'}>Problem</option>
                    <option value={'Offer'}>Offer</option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={classes.contentBodyBottom}>
              <CodeCore></CodeCore>
            </div>
          </div>
          <div className={classes.contentFooter}></div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
