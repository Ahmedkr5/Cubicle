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
import AddPost from './AddPost';
import DialogContentText from '@material-ui/core/DialogContentText';

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
    borderRadius: '30px',
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
    width: '500px',
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

export default function NewFeed(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [state, setState] = React.useState({
    Type: '',
    name: 'hai',
  });

  const handleCallback = (childData) => {
    setOpen(childData);
    props.parentCallback(childData);
  };

  const handleCallbackDialog = (childData) => {
    setOpenDialog(childData);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
    props.parentCallback(true);
  };
  const handleClose = () => {
    setOpen(false);
    props.parentCallback(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    props.parentCallbackDialog(false);
  };
  const handleCloseBoth = () => {
    setOpenDialog(false);
    setOpen(false);
    props.parentCallbackDialog(false);
    props.parentCallback(false);
  };

  console.log(props?.user);

  return (
    <>
      <div className={classes.root}>
        <Avatar
          aria-label='recipe'
          variant='rounded'
          className={classes.rounded}
          src={
            'https://the-cubicle.herokuapp.com/uploads/' +
            props?.user?.profileimage
          }
          onClick={() => window.location.replace(`/profile/${props?.user?.id}`)}
        ></Avatar>
        <Button
          className={classes.btn}
          variant='outlined'
          onClick={handleClickOpen}
        >
          Express yourself
        </Button>
      </div>
      {open && (
        <AddPost
          user={props?.user}
          parentCallback={handleCallback}
          parentCallbackDialog={handleCallbackDialog}
        />
      )}
      <div>
        <Dialog
          open={openDialog}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          style={{ borderRadius: '15px' }}
        >
          <DialogTitle id='alert-dialog-title'>
            {'Cancel the post ?🤔'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Changes you made so far will not be saved
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              variant={'contained'}
              color='primary'
            >
              Keep editing
            </Button>
            <Button
              onClick={handleCloseBoth}
              variant={'contained'}
              color='secondary'
              autoFocus
            >
              Yes, quit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
