import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/MeetingRoom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useApi } from '../../hooks/useApi';
import socketClient from 'socket.io-client';
import authService from '../../services/auth.service';
import Swal from 'sweetalert2';
import Badge from '@material-ui/core/Badge';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import IconButton from '@material-ui/core/IconButton';

const classes = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function RoomVideo() {
  const [users, err, reload] = useApi('allUsers/');
  const [top100Films, setTop100Films] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState();
  const [open, setOpen] = React.useState(false);
  const user = authService.getCurrentUser();
  const transmitter = user['id'];
  const socket = socketClient('http://localhost:3001/');

  socket.on('typingMeetC', async (msg) => {
    msg.data.map((d) => {
      console.log(d.title);

      if (d.year == transmitter && transmitter != msg.data[0].year) {
        var x = document.getElementById('myaudiocall');
        x.play();
        Swal.queue([
          {
            title: 'Video Call from ' + msg[3],
            confirmButtonText: 'Answer',
            showCancelButton: true,
            cancelButtonText: 'Leave',
            imageUrl: 'http://localhost:3001/uploads/' + msg[2],
            preConfirm: () => {
              var x = document.getElementById('myaudiocall');
              x.pause();
              var modalWindow;
              const modalTitle = 'Video Call';
              modalWindow = window.open(
                '/meet/' + msg.data[0].year,
                modalTitle,
                'width=1200,height=900,menubar=no,resizable=no,scrollbars=no,status=no,location=no , top=500, left=500'
              );
            },
          },
        ]);
      }
    });
  });

  const handleClickOpen = () => {
    setTop100Films(
      users
        ?.map((user) => ({
          title: user.firstname + ' ' + user.lastname,
          year: user._id,
        }))
        .filter((u) => u != transmitter)
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendMessages = () => {
    setOpen(false);

    socket.emit('typingMeet', {
      data: selectedUsers,
    });
    var modalWindow;
    const modalTitle = 'Video Call';
    modalWindow = window.open(
      '/meet/' + transmitter,
      'width=1200,height=900,menubar=no,resizable=no,scrollbars=no,status=no,location=no , top=500, left=500'
    );
  };

  return (
    <div className={classes.root}>
      <Fab size='small' onClick={handleClickOpen}>
        <IconButton aria-label='delete'>
          <PeopleOutlineIcon fontSize='30' />
        </IconButton>
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add Users</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Autocomplete
              multiple
              id='fixed-tags-demo'
              onChange={(event, newValue) => {
                setSelectedUsers([
                  ...top100Films?.filter((u) => u.year == transmitter),
                  ...newValue,
                ]);
              }}
              options={top100Films?.filter((u) => u.year != transmitter)}
              getOptionLabel={(option) => option.title}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip label={option.title} {...getTagProps({ index })} />
                ))
              }
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Add Users'
                  variant='outlined'
                  placeholder='Add Users'
                />
              )}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={sendMessages} color='primary'>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
