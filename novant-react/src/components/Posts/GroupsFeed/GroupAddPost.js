import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import { useMutation, gql } from '@apollo/client';
import Editor from '../Editor';
import { ButtonGroup } from '@material-ui/core';
import SnackbarPost from '../SnackbarPost';
import GroupAddTag from './GroupAddTag';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    borderRadius: '15px',
    marginTop: '15px',
    maxWidth: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    cursor: 'pointer',
  },
  UserNameDate: {
    display: 'flex',
    flexDirection: 'column',
    float: 'left',
    margin: '0px',
    padding: '0px',
  },
  p: {
    color: '#000',
    margin: '0px',
    marginTop: '-15%',
    padding: '0px',
    textAlign: 'left',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  },
  content: {
    textAlign: 'left',
  },
  formControl: {
    minWidth: 120,
    height: 0,
    marginLeft: '0',
  },
  selectEmpty: {
    padding: '2px',
  },
  select: {
    height: 20,
    marginTop: -15,
    padding: '0px',
  },
  Buttons: {
    alignItems: 'stretch',
    width: '300px',
    minWidth: '300px',
    backgroundColor: 'transparent',
  },
  Button: {
    width: '100%',
    backgroundColor: '#F0F2F5',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
}));

const ADD_POST = gql`
  mutation AddTodo(
    $userId: ID!
    $groupId: ID!
    $tags: [String]
    $description: String!
    $created_at: String!
  ) {
    addGroupPost(
      userId: $userId
      groupId: $groupId
      tags: $tags
      description: $description
      created_at: $created_at
    ) {
      id
      tags
      description
      user {
        firstname
        lastname
      }
    }
  }
`;

const preventDefault = (event) => event.preventDefault();

export default function GroupAddPost(props) {
  const [addPost, { data }] = useMutation(ADD_POST);
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [descritption, setDescription] = useState({});

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handlePost = () => {
    if (
      Object.keys(descritption).length !== 0 &&
      descritption.blocks.length !== 0
    ) {
      addPost({
        variables: {
          userId: props.user.id.toString(),
          groupId: props.groupid,
          tags: tags[0],
          description: JSON.stringify(descritption),
          created_at: Date.now().toString(),
        },
      });
      // console.log({
      //   userId: props?.user?.id,
      //   type: type,
      //   tags: tags,
      //   descritption: JSON.stringify(descritption),
      //   created_at: Date.now(),
      // });
      props.parentCallback(false);
      props.parentRefetch();
      window.scrollTo(0, 0);
    } else {
      setOpenSnackbar(true);
      // console.log('worked');
    }
  };

  const handleTags = (childData) => {
    // console.log(`test: ${childData}`);
    setTags((arr) => [childData]);
    // var fTag = childData;
    // console.log(tags);
  };

  // const handleType = (type) => {
  //   setType(type);
  // };

  const handleDescription = (childData) => {
    setDescription(childData);
  };

  const handleCallbackSnackbar = (childData) => {
    setOpenSnackbar(childData);
  };

  // const [noComment, setNoComment] = React.useState(false);
  // const [interaction, setInteraction] = React.useState('');

  // const handleExpandClick = () => {
  //   if (props?.post?.comments.length > 0) {
  //     setExpanded(!expanded);
  //   } else {
  //     if (expanded === false) {
  //       setNoComment(true);
  //       setTimeout(() => {
  //         setNoComment(false);
  //       }, 2000);
  //     }
  //   }
  //   if (expanded === true) {
  //     setExpanded(!expanded);
  //   }
  // };

  // const handleCommentClick = () => {
  //   setInteraction('comment');
  //   if (!expanded) {
  //     setExpanded(!expanded);
  //   }
  // };

  // const handleSolveClick = () => {
  //   setInteraction('solve');
  //   if (!expanded) {
  //     setExpanded(!expanded);
  //   }
  // };

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            variant='rounded'
            className={classes.rounded}
            name={props?.user?.firstname + ' ' + props?.user?.lastname}
            src={
              'https://the-cubicle.herokuapp.com/uploads/' +
              props?.user?.profileimage
            }
            onClick={() =>
              window.location.replace(`/profile/${props?.user?.id}`)
            }
          />
        }
        action={
          <IconButton
            aria-label='settings'
            onClick={() => {
              props.parentCallbackDialog(true);
            }}
          >
            <CloseIcon />
          </IconButton>
        }
        title={
          <div className={classes.UserNameDate}>
            <a href='#' onClick={preventDefault} className={classes.p}>
              <strong>
                <span>
                  {' '}
                  {props?.user?.firstname} {props?.user?.lastname}{' '}
                </span>
              </strong>
            </a>
          </div>
        }
      />
      {/* <Divider variant='middle' /> */}

      <CardContent style={{ height: '5%', marginLeft: '50px' }}>
        <GroupAddTag parentCallbackTags={handleTags} />
        <Editor
          style={{ marginBottom: '10px' }}
          parentCallbackDescription={handleDescription}
          user={props?.user}
        />
      </CardContent>
      <Divider variant='middle' style={{}} />
      <CardActions>
        <ButtonGroup
          className={classes.Buttons}
          style={{ width: '100%' }}
          disableElevation
          variant='text'
          fullwidth
        >
          <Button
            // className={classes.Button}
            onClick={handlePost}
            disableElevation
            className={classes.Button}
            aria-label='share'
            variant='contained'
          >
            Post
          </Button>
        </ButtonGroup>
      </CardActions>
      {openSnackbar && (
        <SnackbarPost
          parentCallbackSnackbar={handleCallbackSnackbar}
          message={'Your post is empty 😔'}
        />
      )}
    </Card>
  );
}
