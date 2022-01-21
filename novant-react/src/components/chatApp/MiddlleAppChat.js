import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VideocamIcon from '@material-ui/icons/VideocamRounded';
import { useReactMediaRecorder } from 'react-media-recorder';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicNoneIcon from '@material-ui/icons/MicNone';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import Dropzone from 'react-dropzone-uploader';
import ClickNHold from 'react-click-n-hold';
import 'react-dropzone-uploader/dist/styles.css';
import MessageService from '../../services/MessageService';
import { useApi } from '../../hooks/useApi';
import authService from '../../services/auth.service';
import Timestamp from 'react-timestamp';
import socketClient from 'socket.io-client';
import { animateScroll } from 'react-scroll';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Lightbox } from 'react-modal-image';
import Swal from 'sweetalert2';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    width: '100%',
    height: '880px',
  },
  rad: {
    borderRadius: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
  nameUser: {
    float: 'left',
    fontFamily: 'Monospace',
  },
  UserPhoto: {
    marginLeft: '20px',
  },
  input: {
    float: 'left',
    marginRight: '7px',
    width: '100%',
    maxHeight: '60px',
  },
  commentBody: {
    backgroundColor: 'white',
    padding: '1px 15px  ',
    width: '70%',
    height: '100%',
    float: 'left',
    marginRight: '5%',
  },
  footerIcons: {
    float: 'right',
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);
export default function RecipeReviewCard(props) {
  const [displayEmoji, setdisplayEmoji] = useState('none');
  const [text, setText] = useState('');
  const [drop, setDrop] = useState('none');
  const [taille, settaille] = useState('680px');
  const [myDivider, setMyDivider] = useState('');
  const [open, setOpen] = useState('none');
  const [srcImage, setSrcImage] = useState('a');
  const user = authService.getCurrentUser();
  const transmitter = user['id'];
  // const audiok = new Audio('https://the-cubicle.herokuapp.com/song/callsong.mp3') ;
  // audiok.play() ; audiok.pause() ;
  const closeLightbox = () => {
    setOpen('none');
  };
  const showL = (srci) => {
    setSrcImage(srci);
    setOpen('');
  };
  const onEmojiClick = (emojiObject) => {
    setText(text + emojiObject.native);
  };
  function handleChange(e) {
    setText(e.target.value);
  }
  const classes = useStyles();
  const showEmoji = () => {
    if (displayEmoji == 'none') setdisplayEmoji('');
    else setdisplayEmoji('none');
  };
  const displayDropZone = () => {
    if (drop == '') {
      setDrop('none');
      settaille('680px');
      setMyDivider('');
    } else {
      setDrop('');
      settaille('660px');
      setMyDivider('none');
    }
  };
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    { audio: true }
  );
  const socket = socketClient('https://the-cubicle.herokuapp.com/');
  socket.on('typingC', async (msg) => {
    if (msg[1] == transmitter) {
      var x = document.getElementById('myaudiocall');
      x.play();
      Swal.queue([
        {
          title: 'Video Call from ' + msg[3],
          confirmButtonText: 'Answer',
          showCancelButton: true,
          cancelButtonText: 'Leave',
          imageUrl: 'https://the-cubicle.herokuapp.com/uploads/' + msg[2],
          preConfirm: () => {
            var x = document.getElementById('myaudiocall');
            x.pause();
            var modalWindow;
            const modalTitle = 'Video Call';
            modalWindow = window.open(
              '/video/' + msg[1],
              modalTitle,
              'width=1200,height=900,menubar=no,resizable=no,scrollbars=no,status=no,location=no , top=500, left=500'
            );
          },
        },
      ]);
    }
  });
  const NewWindow = () => {
    socket.emit('typing', {
      transmitter: transmitter,
      receiver: props.userck,
      image: userProf[0].profileimage,
      nom: userProf[0].firstname + ' ' + userProf[0].lastname,
    });
    var modalWindow;
    const modalTitle = 'Video Call';
    modalWindow = window.open(
      '/video/' + props.userck,
      modalTitle,
      'width=1200,height=900,menubar=no,resizable=no,scrollbars=no,status=no,location=no , top=500, left=500'
    );
  };
  const [messages, err, reload] = useApi('api/' + transmitter);
  const [userProf, err1, reload1] = useApi('showUser/' + transmitter);
  const [msgs, setMsgs] = useState(null);
  const [audioplay, setAudioplay] = useState(false);
  useEffect(async () => {
    await setMsgs(
      messages?.filter(
        (msg) =>
          (msg.receiver === props.userck && msg.transmitter === transmitter) ||
          (msg.transmitter === props.userck && msg.receiver === transmitter)
      )
    );
    {
      animateScroll.scrollToBottom({
        containerId: 'ContainerElementID',
        duration: 0,
      });
    }
  }, [props.userck]);
  socket.on('push', async (msg) => {
    await setMsgs(
      msg?.filter(
        (msgk) =>
          (msgk.receiver === props.userck &&
            msgk.transmitter === transmitter) ||
          (msgk.transmitter === props.userck && msgk.receiver === transmitter)
      )
    );
    {
      animateScroll.scrollToBottom({
        containerId: 'ContainerElementID',
        duration: 0,
      });
    }
    if (transmitter === props.userck) {
      var x = document.getElementById('myaudio');
    }
  });

  const SendMessage = (e) => {
    if (selectedFile != null) {
      const data = new FormData();
      data.append('file', selectedFile);
      var randomstring = require('randomstring');
      var date = randomstring.generate();
      axios.post('https://the-cubicle.herokuapp.com/upload/' + date, data, {});
      if (e.key === 'Enter') {
        socket.emit('msg', {
          transmitter: transmitter,
          receiver: props.userck,
          body: text,
          deleted_trans: 0,
          deleted_recived: 0,
          file: date + '-' + fileName,
        });
        setText('');
        setSelectedFile(null);
      }
    } else if (e.key === 'Enter') {
      socket.emit('msg', {
        transmitter: transmitter,
        receiver: props.userck,
        body: text,
        deleted_trans: 0,
        deleted_recived: 0,
      });
      setText('');
    }
  };
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };
  const displayRec = () => {
    stopRecording();
    const data = new FormData();
    data.append('file', mediaBlobUrl);
    var randomstring = require('randomstring');
    var date = randomstring.generate();

    axios.post('https://the-cubicle.herokuapp.com/upload/' + date, data, {});
  };
  return (
    <>
      <link href='../assets/css/chatApp.css' rel='stylesheet' />
      <div id='ffff' style={{ paddingTop: '75px' }}>
        <Paper elevation={0} className={classes.root}>
          <Card elevation={0} className={classes.root}>
            <CardHeader
              avatar={
                <div className={classes.UserPhoto}>
                  <StyledBadge
                    overlap='circle'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant='dot'
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    <Avatar
                      variant='rounded'
                      src={
                        `https://the-cubicle.herokuapp.com/uploads/` +
                        props?.person?.profileimage
                      }
                      className={classes.rad}
                    />
                  </StyledBadge>
                </div>
              }
              action={
                <div>
                  <IconButton
                    aria-label='settings'
                    color='primary'
                    onClick={NewWindow}
                  >
                    <VideocamIcon fontSize='midium' />
                  </IconButton>
                  <IconButton aria-label='settings' color='secondary'>
                    <PhoneOutlinedIcon fontSize='midium' />
                  </IconButton>
                </div>
              }
              title={
                <h4 className={classes.nameUser}>
                  {props.person != null
                    ? props?.person?.firstname + ' ' + props?.person?.lastname
                    : 'Mohamed Bouzid'}
                </h4>
              }
            />
            <Divider style={{ marginTop: '-6px' }} />
            <CardContent>
              <Typography color='textSecondary' component='p'>
                <div
                  id='ContainerElementID'
                  style={{ height: taille, overflowY: 'scroll' }}
                >
                  {msgs?.map((msg, index) => {
                    if ((index = !0))
                      if (msg.transmitter === transmitter) {
                        if (msg.file[0] == null && msg.body != '') {
                          return (
                            <div className='blockMessage' key={msg._id}>
                              <div className='authorthumb'>
                                <Avatar
                                  variant='rounded'
                                  src={
                                    `https://the-cubicle.herokuapp.com/uploads/` +
                                    userProf[0].profileimage
                                  }
                                  className={classes.rad}
                                />
                              </div>
                              <span className='chatmessageitem spanMessage'>
                                {msg.body}
                              </span>
                              <div className='Appnotification-date'>
                                <span>
                                  <Timestamp
                                    relative
                                    date={msg.created_at}
                                    autoUpdate
                                  />
                                </span>
                              </div>
                            </div>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body == '' &&
                          (msg.file[0].split('.').pop() == 'png' ||
                            msg.file[0].split('.').pop() == 'jpg' ||
                            msg.file[0].split('.').pop() == 'gif' ||
                            msg.file[0].split('.').pop() == 'jpeg')
                        ) {
                          return (
                            <div className='blockMessage' key={msg._id}>
                              <div className='authorthumb'>
                                <Avatar
                                  variant='rounded'
                                  src={
                                    `https://the-cubicle.herokuapp.com/uploads/` +
                                    userProf[0].profileimage
                                  }
                                  className={classes.rad}
                                />
                              </div>
                              <span className='chatmessageitem spanMessage'>
                                <img
                                  onClick={() =>
                                    showL(
                                      'https://the-cubicle.herokuapp.com/uploads/' +
                                        msg.file[0]
                                    )
                                  }
                                  src={
                                    'https://the-cubicle.herokuapp.com/uploads/' +
                                    msg.file[0]
                                  }
                                  style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    borderRadius: '4%',
                                    cursor: 'pointer',
                                  }}
                                />
                              </span>

                              <div className='Appnotification-date'>
                                <span>
                                  <Timestamp
                                    relative
                                    date={msg.created_at}
                                    autoUpdate
                                  />
                                </span>
                              </div>
                            </div>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body == '' &&
                          (msg.file[0].split('.').pop() != 'png' ||
                            msg.file[0].split('.').pop() != 'jpg' ||
                            msg.file[0].split('.').pop() != 'gif' ||
                            msg.file[0].split('.').pop() != 'jpeg')
                        ) {
                          return (
                            <div className='blockMessage' key={msg._id}>
                              <div className='authorthumb'>
                                <Avatar
                                  variant='rounded'
                                  src={
                                    `https://the-cubicle.herokuapp.com/uploads/` +
                                    userProf[0].profileimage
                                  }
                                  className={classes.rad}
                                />
                              </div>
                              <span className='chatmessageitem spanMessage'>
                                <a
                                  href={
                                    'https://the-cubicle.herokuapp.com/uploads/' +
                                    msg.file[0]
                                  }
                                  target={'_blank'}
                                >
                                  {msg.file[0].split('-').pop()}{' '}
                                </a>
                              </span>

                              <div className='Appnotification-date'>
                                <span>
                                  <Timestamp
                                    relative
                                    date={msg.created_at}
                                    autoUpdate
                                  />
                                </span>
                              </div>
                            </div>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body != '' &&
                          (msg.file[0].split('.').pop() == 'png' ||
                            msg.file[0].split('.').pop() == 'jpg' ||
                            msg.file[0].split('.').pop() == 'gif' ||
                            msg.file[0].split('.').pop() == 'jpeg')
                        ) {
                          return (
                            <>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumb'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      userProf[0].profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitem spanMessage'>
                                  {msg.body}
                                </span>
                                <div className='Appnotification-date'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumb'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      userProf[0].profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitem spanMessage'>
                                  <img
                                    onClick={() =>
                                      showL(
                                        'https://the-cubicle.herokuapp.com/uploads/' +
                                          msg.file[0]
                                      )
                                    }
                                    src={
                                      'https://the-cubicle.herokuapp.com/uploads/' +
                                      msg.file[0]
                                    }
                                    style={{
                                      maxHeight: '100%',
                                      maxWidth: '100%',
                                      borderRadius: '4%',
                                      cursor: 'pointer',
                                    }}
                                  />
                                </span>
                                <div className='Appnotification-date'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                            </>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body != '' &&
                          (msg.file[0].split('.').pop() != 'png' ||
                            msg.file[0].split('.').pop() != 'jpg' ||
                            msg.file[0].split('.').pop() != 'gif' ||
                            msg.file[0].split('.').pop() != 'jpeg')
                        ) {
                          return (
                            <>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumb'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      userProf[0].profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitem spanMessage'>
                                  {msg.body}
                                </span>
                                <div className='Appnotification-date'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumb'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      userProf[0].profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitem spanMessage'>
                                  <a
                                    href={
                                      'https://the-cubicle.herokuapp.com/uploads/' +
                                      msg.file[0]
                                    }
                                    target={'_blank'}
                                  >
                                    {msg.file[0].split('-').pop()}{' '}
                                  </a>
                                </span>
                                <div className='Appnotification-date'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                            </>
                          );
                        }
                      } else {
                        if (msg.file[0] == null && msg.body != '') {
                          return (
                            <div className='blockMessage' key={msg._id}>
                              <div className='authorthumbrecept'>
                                <Avatar
                                  variant='rounded'
                                  src={
                                    `https://the-cubicle.herokuapp.com/uploads/` +
                                    props?.person?.profileimage
                                  }
                                  className={classes.rad}
                                />
                              </div>
                              <span className='chatmessageitemrecept spanMessagerecept'>
                                {' '}
                                {msg.body}{' '}
                              </span>
                              <div className='Appnotification-daterecept'>
                                <span>
                                  <Timestamp
                                    relative
                                    date={msg.created_at}
                                    autoUpdate
                                  />
                                </span>
                              </div>
                            </div>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body == '' &&
                          (msg.file[0].split('.').pop() == 'png' ||
                            msg.file[0].split('.').pop() == 'jpg' ||
                            msg.file[0].split('.').pop() == 'gif' ||
                            msg.file[0].split('.').pop() == 'jpeg')
                        ) {
                          return (
                            <div className='blockMessage' key={msg._id}>
                              <div className='authorthumbrecept'>
                                <Avatar
                                  variant='rounded'
                                  src={
                                    `https://the-cubicle.herokuapp.com/uploads/` +
                                    props?.person?.profileimage
                                  }
                                  className={classes.rad}
                                />
                              </div>
                              <span className='chatmessageitemrecept spanMessagerecept'>
                                <img
                                  onClick={() =>
                                    showL(
                                      'https://the-cubicle.herokuapp.com/uploads/' +
                                        msg.file[0]
                                    )
                                  }
                                  src={
                                    'https://the-cubicle.herokuapp.com/uploads/' +
                                    msg.file[0]
                                  }
                                  style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    borderRadius: '4%',
                                    cursor: 'pointer',
                                  }}
                                />
                              </span>
                              <div className='Appnotification-daterecept'>
                                <span>
                                  <Timestamp
                                    relative
                                    date={msg.created_at}
                                    autoUpdate
                                  />
                                </span>
                              </div>
                            </div>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body == '' &&
                          (msg.file[0].split('.').pop() != 'png' ||
                            msg.file[0].split('.').pop() != 'jpg' ||
                            msg.file[0].split('.').pop() != 'gif' ||
                            msg.file[0].split('.').pop() != 'jpeg')
                        ) {
                          return (
                            <div className='blockMessage' key={msg._id}>
                              <div className='authorthumbrecept'>
                                <Avatar
                                  variant='rounded'
                                  src={
                                    `https://the-cubicle.herokuapp.com/uploads/` +
                                    props?.person?.profileimage
                                  }
                                  className={classes.rad}
                                />
                              </div>
                              <span className='chatmessageitemrecept spanMessagerecept'>
                                <a
                                  href={
                                    'https://the-cubicle.herokuapp.com/uploads/' +
                                    msg.file[0]
                                  }
                                  target={'_blank'}
                                >
                                  {msg.file[0].split('-').pop()}{' '}
                                </a>
                              </span>
                              <div className='Appnotification-daterecept'>
                                <span>
                                  <Timestamp
                                    relative
                                    date={msg.created_at}
                                    autoUpdate
                                  />
                                </span>
                              </div>
                            </div>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body != '' &&
                          (msg.file[0].split('.').pop() == 'png' ||
                            msg.file[0].split('.').pop() == 'jpg' ||
                            msg.file[0].split('.').pop() == 'gif' ||
                            msg.file[0].split('.').pop() == 'jpeg')
                        ) {
                          return (
                            <>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumbrecept'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      props?.person?.profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitemrecept spanMessagerecept'>
                                  {' '}
                                  {msg.body}{' '}
                                </span>
                                <div className='Appnotification-daterecept'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumbrecept'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      props?.person?.profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitemrecept spanMessagerecept'>
                                  <img
                                    onClick={() =>
                                      showL(
                                        'https://the-cubicle.herokuapp.com/uploads/' +
                                          msg.file[0]
                                      )
                                    }
                                    src={
                                      'https://the-cubicle.herokuapp.com/uploads/' +
                                      msg.file[0]
                                    }
                                    style={{
                                      maxHeight: '100%',
                                      maxWidth: '100%',
                                      borderRadius: '4%',
                                      cursor: 'pointer',
                                    }}
                                  />
                                </span>
                                <div className='Appnotification-daterecept'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                            </>
                          );
                        }
                        if (
                          msg.file[0] != null &&
                          msg.body != '' &&
                          (msg.file[0].split('.').pop() != 'png' ||
                            msg.file[0].split('.').pop() != 'jpg' ||
                            msg.file[0].split('.').pop() != 'gif' ||
                            msg.file[0].split('.').pop() != 'jpeg')
                        ) {
                          return (
                            <>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumbrecept'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      props?.person?.profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitemrecept spanMessagerecept'>
                                  {' '}
                                  {msg.body}{' '}
                                </span>
                                <div className='Appnotification-daterecept'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className='blockMessage' key={msg._id}>
                                <div className='authorthumbrecept'>
                                  <Avatar
                                    variant='rounded'
                                    src={
                                      `https://the-cubicle.herokuapp.com/uploads/` +
                                      props?.person?.profileimage
                                    }
                                    className={classes.rad}
                                  />
                                </div>
                                <span className='chatmessageitemrecept spanMessagerecept'>
                                  <a
                                    href={
                                      'https://the-cubicle.herokuapp.com/uploads/' +
                                      msg.file[0]
                                    }
                                    target={'_blank'}
                                  >
                                    {msg.file[0].split('-').pop()}{' '}
                                  </a>
                                </span>
                                <div className='Appnotification-daterecept'>
                                  <span>
                                    <Timestamp
                                      relative
                                      date={msg.created_at}
                                      autoUpdate
                                    />
                                  </span>
                                </div>
                              </div>
                            </>
                          );
                        }
                      }
                  })}
                  <div style={{ display: open }}>
                    <Lightbox medium={srcImage} onClose={closeLightbox} />
                  </div>
                  <div className='blockMessage' style={{ display: 'none' }}>
                    <div className='authorthumb'>
                      <Avatar
                        variant='rounded'
                        src={`https://the-cubicle.herokuapp.com/uploads/`}
                        className={classes.rad}
                      />
                    </div>
                    <span className='chatmessageitem spanMessage'>
                      <audio
                        style={{ height: '20px' }}
                        src={mediaBlobUrl}
                        controls
                      />
                    </span>
                    <div className='Appnotification-date'>
                      <span>Yesterday at 8:10pm</span>
                    </div>
                  </div>
                </div>
              </Typography>
              <Divider style={{ display: myDivider }} />
              <div style={{ display: displayEmoji }}>
                <Picker
                  onChange={setText}
                  cleanOnEnter
                  onSelect={onEmojiClick}
                  set='facebook'
                  style={{
                    position: 'absolute',
                    bottom: '7%',
                    marginLeft: '40%',
                    zIndex: '100',
                  }}
                  i18n={{
                    search: 'Recherche',
                    categories: {
                      search: 'Résultats de recherche',
                      recent: 'Récents',
                    },
                  }}
                />
              </div>
            </CardContent>
            <div style={{ width: '100%', maxHeight: '0px', display: drop }}>
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='validatedCustomFile'
                  onChange={onChangeHandler}
                />
                <label className='custom-file-label' for='validatedCustomFile'>
                  Choose file...
                </label>
                <div className='invalid-feedback'>
                  Example invalid custom file feedback
                </div>
              </div>
            </div>
            <CardActions style={{ marginTop: '15px' }}>
              <div className={classes.commentBody}>
                <InputBase
                  className={classes.input}
                  placeholder='Aa'
                  inputProps={{ 'aria-label': 'search google maps' }}
                  onChange={handleChange}
                  value={text}
                  onKeyDown={SendMessage}
                />
              </div>
              <div className={classes.footerIcons}>
                <IconButton
                  type='submit'
                  className={classes.iconButton}
                  onClick={showEmoji}
                  aria-label='emoji'
                  color='primary'
                >
                  <EmojiEmotionsOutlinedIcon style={{ fontSize: 22 }} />
                </IconButton>
                <IconButton
                  onClick={displayDropZone}
                  type='submit'
                  className={classes.iconButton}
                  aria-label='emoji'
                  color='primary'
                >
                  <PhotoLibraryIcon style={{ fontSize: 22 }} />
                </IconButton>
                <ClickNHold
                  time={5}
                  onStart={startRecording}
                  onEnd={displayRec}
                  style={{ display: 'inline' }}
                >
                  <IconButton
                    type='submit'
                    className={classes.iconButton}
                    aria-label='emoji'
                    color='secondary'
                  >
                    <MicNoneIcon style={{ fontSize: 22 }} />
                  </IconButton>
                </ClickNHold>
              </div>
            </CardActions>
          </Card>
        </Paper>
        <audio
          controls
          src={`../song/notification.mp3`}
          id='myaudiomyaudio'
          style={{ display: 'none' }}
        >
          {' '}
        </audio>
        <audio
          id='myaudiocall'
          src={`https://ourcubicle.netlify.app/song/callsong.mp3`}
          style={{ display: 'none' }}
        >
          {' '}
        </audio>
      </div>
    </>
  );
}
