import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import Divider from '@material-ui/core/Divider';
import Comment from '../Comment';
import PostComment from '../PostComment';
import CodeComment from '../CodeComment';
import { useLazyQuery, gql, useMutation } from '@apollo/client';
import ShowEditor from './ShowEditor';
import { ButtonGroup, Chip, Typography } from '@material-ui/core';
import SnackbarPost from '../SnackbarPost';
import UpdatedComment from './UpdatedComment';
import UpdatedPostComment from './UpdatedPostComment';
import Popover from '@material-ui/core/Popover';

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
    borderRadius: '5px',
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
    padding: '0px',
    textAlign: 'left',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  },
  a: {
    color: '#000',
    margin: '0px',
    padding: '0px',
    textAlign: 'left',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '2%',
    marginTop: '2%',
    '&:hover': {
      color: '#000',
      textDecoration: 'none',
    },
  },
  content: {
    textAlign: 'left',
  },
  Buttons: {
    alignItems: 'stretch',
    width: '300px',
    minWidth: '300px',
    backgroundColor: 'transparent',
    color: 'trasparent',
  },
  chip: {
    backgroundColor: '#1877F2',
    marginRight: '1%',
    marginBottom: '1%',
  },
}));

const COMMENT_QUERY = gql`
  query postsComments($id: ID!) {
    comments(id: $id) {
      type
      description
      created_at
    }
  }
`;

const ADD_LIKE = gql`
  mutation AddTodo($userId: ID!, $postId: ID!) {
    addLike(userId: $userId, postId: $postId) {
      id
      description
      user {
        firstname
        lastname
        profileimage
      }
    }
  }
`;

const UNLIKE = gql`
  mutation AddTodo($userId: ID!, $postId: ID!) {
    unLike(userId: $userId, postId: $postId) {
      id
      description
      user {
        firstname
        lastname
        profileimage
      }
    }
  }
`;

const preventDefault = (event) => event.preventDefault();

export default function UpdatedFeed(props) {
  const [getComments, { loading, error, newComments }] = useLazyQuery(
    COMMENT_QUERY,
    {
      variables: {
        id: props?.post?.id,
      },
      pollInterval: 100,
    }
  );
  const [addLike, { data }] = useMutation(ADD_LIKE);
  const [unLike, { unLikeData }] = useMutation(UNLIKE);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [commented, setCommented] = React.useState(false);
  const [freshComment, setFreshComment] = React.useState({});
  const [noComment, setNoComment] = React.useState(false);
  const [interaction, setInteraction] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [reactList, setReactList] = React.useState();
  const [reacted, setReacted] = React.useState(
    props?.post?.likesList.some((like) => like.id === props?.user?.id)
  );
  const [reactNumber, setReactNumber] = React.useState(
    props?.post?.likesList.length
  );
  const [reactComponent, setReactComponent] = React.useState(
    <FavoriteBorderTwoToneIcon color='secondary' />
  );

  // if (reacted) {
  //   setReactComponent(<FavoriteBorderTwoToneIcon color='secondary' />);
  // } else {
  //   setReactComponent(<FavoriteBorderTwoToneIcon color='secondary' />);
  // }
  console.log(reacted);

  var delta = Math.round((+new Date() - props?.post?.created_at) / 1000);
  console.log(
    'https://the-cubicle.herokuapp.com/uploads/' + props?.post?.user?.profileimage
  );

  var minute = 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7,
    month = week * 4,
    year = month * 12;

  var fuzzy;

  if (delta < 30) {
    fuzzy = 'just now.';
  } else if (delta < minute) {
    fuzzy = delta + ' seconds ago.';
  } else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.';
  } else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' minutes ago.';
  } else if (Math.floor(delta / hour) == 1) {
    fuzzy = '1 hour ago.';
  } else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' hours ago.';
  } else if (delta < day * 2) {
    fuzzy = 'yesterday';
  } else if (delta < week) {
    fuzzy = '1 week ago.';
  } else if (delta < week * 2) {
    fuzzy = '2 weeks ago.';
  } else if (delta < week * 3) {
    fuzzy = '3 weeks ago.';
  } else if (delta < month) {
    fuzzy = '1 month ago.';
  } else if (delta < month * 2) {
    fuzzy = '2 month ago.';
  } else if (delta < month * 3) {
    fuzzy = '3 month ago.';
  } else if (delta < month * 4) {
    fuzzy = '4 month ago.';
  } else if (delta < month * 5) {
    fuzzy = '5 month ago.';
  } else if (delta < month * 6) {
    fuzzy = '6 month ago.';
  } else if (delta < month * 7) {
    fuzzy = '7 month ago.';
  } else if (delta < month * 8) {
    fuzzy = '8 month ago.';
  } else if (delta < month * 9) {
    fuzzy = '9 month ago.';
  } else if (delta < month * 10) {
    fuzzy = '10 month ago.';
  } else if (delta < month * 11) {
    fuzzy = '11 month ago.';
  } else if (delta < year) {
    fuzzy = '1 year ago.';
  }

  const handleExpandClick = () => {
    if (props?.post?.comments.length > 0) {
      setExpanded(!expanded);
    } else {
      if (expanded === false) {
        setNoComment(true);
        setTimeout(() => {
          setNoComment(false);
        }, 2000);
      }
    }
    if (expanded === true) {
      setExpanded(!expanded);
    }
  };

  const handleCommentClick = () => {
    setInteraction('comment');
    if (!expanded) {
      setExpanded(!expanded);
    }
  };

  const handleSolveClick = () => {
    setInteraction('solve');
    if (!expanded) {
      setExpanded(!expanded);
    }
  };

  const handleNewComment = async (childData) => {
    getComments();
    //   setCommented(!commented);
    //   console.log('childData', childData.addComment.description);
    //   await setFreshComment(childData.addComment.description);
    //   await console.log('fresh Comment', freshComment);
  };

  const handleReact = () => {
    if (reacted === false) {
      setReactComponent(<FavoriteBorderTwoToneIcon color='secondary' />);
      addLike({
        variables: {
          userId: props?.user.id,
          postId: props?.post.id,
        },
      });
      setReacted(true);
    } else {
      setReactComponent(<FavoriteTwoToneIcon color='secondary' />);
      unLike({
        variables: {
          userId: props?.user.id,
          postId: props?.post.id,
        },
      });
      setReacted(false);
    }
  };

  // console.log(props?.post);
  console.log(props?.post);
  // console.log('this meeee', reactList);
  // if (props?.post?.likesList.some((like) => like.id === props?.user?.id)) {
  //   setReacted(true);
  // }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    // <div className={classes.feed}>
    //   <Paper>
    //     <div>
    //       <Avatar variant='rounded' className={classes.rounded}></Avatar>
    //       <div></div>
    //     </div>
    //   </Paper>
    // </div>
    <Card className={classes.root} elevation={0}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            name={
              props?.post?.user?.firstname + ' ' + props?.post?.user?.lastname
            }
            alt={
              props?.post?.user?.firstname + ' ' + props?.post?.user?.lastname
            }
            variant='rounded'
            className={classes.rounded}
            src={
              'https://the-cubicle.herokuapp.com/uploads/' +
              props?.post?.user?.profileimage
            }
            onClick={() =>
              window.location.replace(`/profile/${props?.post?.user?.id}`)
            }
          ></Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          <div className={classes.UserNameDate}>
            <a href={`/profile/${props?.post?.user?.id}`} className={classes.p}>
              <strong>
                <span>
                  {' '}
                  {props?.post?.user?.firstname} {props?.post?.user?.lastname}{' '}
                </span>
              </strong>
            </a>
            <a href='#' onClick={preventDefault} className={classes.p}>
              <span> {fuzzy} </span>
            </a>
          </div>
        }
      />
      {/* <Divider variant='middle' /> */}

      <CardContent style={{ paddingLeft: '10%' }}>
        <div className={classes.chips}>
          {props?.post?.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag.toUpperCase()}
              color='primary'
              className={classes.chip}
            />
          ))}
        </div>
        <ShowEditor data={props?.post?.description}></ShowEditor>
        {reacted && props?.post?.likesList.length === 1 ? (
          <div>
            <FavoriteTwoToneIcon color='secondary' />
            <a className={classes.a} href={`/profile/${props?.user.id}`}>
              <span>
                {' '}
                {props?.user.firstname} {props?.user.lastname}{' '}
              </span>
            </a>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '10px',
                }}
              >
                {props?.post?.likesList.map((like) => (
                  <a href={`/profile/${like.id}`} className={classes.p}>
                    {like.firstname} {like.lastname}
                  </a>
                ))}
              </div>
            </Popover>
          </div>
        ) : null}

        {reacted && props?.post?.likesList.length > 1 ? (
          <div>
            <FavoriteTwoToneIcon color='secondary' />
            <a className={classes.a}>
              <span onClick={handleClick}>
                {' '}
                {'You and '} {props?.post?.likesList.length - 1}{' '}
                {' other likes'}
              </span>
            </a>
            <Popover
              elevation={1}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '10px',
                }}
              >
                {props?.post?.likesList.map((like, index) => (
                  <a href={`/profile/${like.id}`} className={classes.a}>
                    {/* {index !== 0 ? (
                      <Divider
                        variant='fullWidth'
                        style={{
                          width: '100%',
                          marginBottom: '2%',
                          marginTop: '2%',
                        }}
                      ></Divider>
                    ) : null} */}
                    {like.firstname} {like.lastname}
                  </a>
                ))}
              </div>
            </Popover>
          </div>
        ) : null}

        {!reacted && props?.post?.likesList.length === 1 ? (
          <div>
            <FavoriteTwoToneIcon color='secondary' />
            <a className={classes.a}>
              <span>
                {' '}
                {props?.post?.likesList.map((like) => (
                  <a href={`/profile/${like.id}`} className={classes.a}>
                    {like.firstname} {like.lastname}
                  </a>
                ))}
              </span>
            </a>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '10px',
                }}
              >
                {props?.post?.likesList.map((like) => (
                  <a href={`/profile/${like.id}`} className={classes.p}>
                    {like.firstname} {like.lastname}
                  </a>
                ))}
              </div>
            </Popover>
          </div>
        ) : null}

        {!reacted && props?.post?.likesList.length > 1 ? (
          <div>
            <FavoriteTwoToneIcon color='secondary' />
            <a className={classes.a}>
              <span onClick={handleClick}>
                {' '}
                {props?.post?.likesList.length} {' likes'}
              </span>
            </a>
            <Popover
              elevation={1}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '10px',
                }}
              >
                {props?.post?.likesList.map((like) => (
                  <a href={`/profile/${like.id}`} className={classes.a}>
                    {like.firstname} {like.lastname}
                  </a>
                ))}
              </div>
            </Popover>
          </div>
        ) : null}
      </CardContent>

      <Divider variant='middle' />
      <CardActions disableSpacing>
        <ButtonGroup
          className={classes.Buttons}
          style={{ width: '100%' }}
          disableElevation
          variant='text'
          fullWidth
        >
          {reacted ? (
            <Button
              style={{ border: '0px' }}
              aria-label='add to favorites'
              startIcon={<FavoriteTwoToneIcon color='secondary' />}
              onClick={() => {
                handleReact();
              }}
            >
              React
            </Button>
          ) : (
            <Button
              style={{ border: '0px' }}
              aria-label='add to favorites'
              startIcon={<FavoriteBorderTwoToneIcon color='secondary' />}
              onClick={() => {
                handleReact();
              }}
            >
              React
            </Button>
          )}

          <Button
            style={{ border: '0px' }}
            onClick={handleCommentClick}
            aria-label='share'
            startIcon={<ChatBubbleOutlineTwoToneIcon />}
          >
            Comment
          </Button>
          {noComment && <SnackbarPost message={'Still no comment ????'} />}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </ButtonGroup>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Divider variant='middle' />
        <CardContent>
          {/* <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don???t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography> */}

          {props?.post?.comments?.map((comment) => (
            <UpdatedComment key={comment.id} comment={comment}></UpdatedComment>
          ))}
          {newComments &&
            newComments.map((comment) => {
              <UpdatedComment
                key={comment.id}
                comment={comment}
              ></UpdatedComment>;
            })}
          {/* {commented && (
            <UpdatedComment
              key={freshComment.id}
              comment={freshComment}
            ></UpdatedComment>
          )} */}
          {interaction === 'comment' && (
            <UpdatedPostComment
              postId={props?.post?.id}
              user={props.user}
              callbackComment={handleNewComment}
            ></UpdatedPostComment>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
