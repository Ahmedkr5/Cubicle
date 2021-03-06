import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge, Button, Divider } from '@material-ui/core';
import UIAvatar from 'react-ui-avatars';
import Lightbox from 'react-modal-image/lib/Lightbox';
import experienceService from '../../services/experience.service';
import axios from 'axios';
import { Form } from 'formik';
import authService from '../../services/auth.service';
import { useApi } from '../../hooks/useApi';
import Frbutton from '../Friends/Frbutton';

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

export default function ProfileCard(props) {
  const currentuser = authService.getCurrentUser();
  const [userProf, err1, reload1] = useApi('showUser/' + props.userid);
  const [userProf2, err2, reload2] = useApi('users/' + currentuser['id']);
  var coins = userProf?.map((prof) => prof.Coins);
  console.log(coins);

  const classes = useStyles();
  const [CoverImage, setCoverImage] = useState('');
  const [open, setOpen] = useState('none');
  const [ProfileImage, setProfileImage] = useState('');

  const [srcImage, setSrcImage] = useState('a');
  const closeLightbox = () => {
    setOpen('none');
  };
  const showL = (srci) => {
    setSrcImage(srci);
    setOpen('');
  };
  const [selectedProfileImage, setselectedProfileImage] = useState(null);

  const [selectedCoverImage, setselectedCoverImage] = useState(null);
  var profileimage =
    'https://the-cubicle.herokuapp.com/uploads/' + props.profileimage;
  var coverimage =
    'https://the-cubicle.herokuapp.com/uploads/' + props.coverimage;
  var name = props.firstname + ' ' + props.lastname;
  const onChangeHandler = (event) => {
    setselectedCoverImage(event.target.files[0]);
    setCoverImage(event.target.files[0].name);
    //  event.target.files = null
    console.log(event.target.files);
    const data = new FormData();
    data.append('file', event.target.files[0]);
    var randomstring = require('randomstring');
    var date = randomstring.generate();
    console.log(event.target.files[0]);
    axios.post('https://the-cubicle.herokuapp.com/upload/' + date, data, {});
    experienceService
      .editcoverimage(date + '-' + event.target.files[0].name, props.userid)
      .then(() => {
        window.location.reload();
      });
  };

  const onChangeHandler1 = (event) => {
    setselectedProfileImage(event.target.files[0]);
    setProfileImage(event.target.files[0].name);
    //  event.target.files = null
    console.log(event.target.files);
    const data = new FormData();
    data.append('file', event.target.files[0]);
    var randomstring = require('randomstring');
    var date = randomstring.generate();
    console.log(event.target.files[0]);
    axios.post('https://the-cubicle.herokuapp.com/upload/' + date, data, {});
    experienceService
      .editprofileimage(date + '-' + event.target.files[0].name, props.userid)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
      <Card
        elevation={0}
        style={{
          borderTopRightRadius: '15px',
          borderTopLeftRadius: '15px',
          marginTop: '15px',
        }}
      >
        <CardMedia
          className={classes.media}
          image={coverimage}
          onClick={() =>
            showL('https://the-cubicle.herokuapp.com/uploads/' + props.coverimage)
          }
          style={{ maxHeight: '100%', maxWidth: '100%', cursor: 'pointer' }}
        />
        {currentuser['id'] === props.userid && (
          <React.Fragment>
            <input
              accept='image/*'
              style={{ display: 'none' }}
              id='raised-button-file'
              multiple
              type='file'
              onChange={onChangeHandler}
            />
            <label htmlFor='raised-button-file'>
              <Button
                style={{
                  marginTop: '-100px',
                  marginLeft: '650px',
                  backgroundColor: 'black',
                  color: 'white',
                  opacity: 0.5,
                }}
                component='span'
              >
                Update Cover Picture
              </Button>
            </label>

            <input
              accept='image/*'
              style={{ display: 'none' }}
              id='raised-aa-file'
              multiple
              type='file'
              onChange={onChangeHandler1}
            />
            <label htmlFor='raised-aa-file'>
              <Button
                style={{
                  marginTop: '50px',
                  backgroundColor: 'black',
                  color: 'white',
                  opacity: 0.5,
                }}
                component='span'
              >
                Update Profile Picture
              </Button>
            </label>
          </React.Fragment>
        )}

        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '-100px',
            float: 'left',
            marginLeft: '100px',
          }}
        >
          <Badge badgeContent={coins} max={10000} color='primary'>
            {props.profileimage == 'default profile image' && (
              <UIAvatar
                name={name}
                className={classes.rad}
                color='#551a8b'
              ></UIAvatar>
            )}
            {props.profileimage !== 'default profile image' && (
              <Avatar
                onClick={() =>
                  showL(
                    'https://the-cubicle.herokuapp.com/uploads/' +
                      props.profileimage
                  )
                }
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  cursor: 'pointer',
                }}
                src={profileimage}
                className={classes.rad}
                color='#551a8b'
              ></Avatar>
            )}
          </Badge>
          <Typography
            variant='h4'
            style={{ marginTop: '85px', marginLeft: '85px' }}
          >
            {props.firstname} {props.lastname}
          </Typography>
          <Frbutton
            myfriends={userProf2?.friends}
            friends={props?.friends}
            friendRequests={props?.friendRequests}
            id={props?.userid}
          ></Frbutton>
        </CardContent>
      </Card>
      <Divider variant='middle' />
    </>
  );
}
