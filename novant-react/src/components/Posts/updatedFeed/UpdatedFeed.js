import React, { useRef } from 'react';
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
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import Divider from '@material-ui/core/Divider';
import Comment from '../Comment';
import SkeletonComment from '../SkeletonComment';
import PostComment from '../PostComment';
import CodeComment from '../CodeComment';
import { useLazyQuery, gql } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';
import ShowEditor from './ShowEditor';

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
    backgroundColor: red[500],
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
  content: {
    textAlign: 'left',
  },
}));

const COMMENT_QUERY = gql`
  {
    comment(id: $id) {
      type
      description
      created_at
    }
  }
`;

const preventDefault = (event) => event.preventDefault();

export default function UpdatedFeed(props) {
  const [getComments, { loading, error, data }] = useLazyQuery(COMMENT_QUERY);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [noComment, setNoComment] = React.useState(false);
  const [interaction, setInteraction] = React.useState('');

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
            variant='rounded'
            className={classes.rounded}
          >
            H
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          <div className={classes.UserNameDate}>
            <a href='#' onClick={preventDefault} className={classes.p}>
              <strong>
                <span>
                  {' '}
                  {props?.post?.user?.firstname} {props?.post?.user?.lastname}{' '}
                </span>
              </strong>
            </a>
            <a href='#' onClick={preventDefault} className={classes.p}>
              <span> {props?.post?.created_at} </span>
            </a>
          </div>
        }
      />
      {/* <Divider variant='middle' /> */}

      <CardContent>
        <ShowEditor data={props?.post?.description}></ShowEditor>
      </CardContent>

      <Divider variant='middle' />
      <CardActions disableSpacing>
        <Button
          aria-label='add to favorites'
          startIcon={<FavoriteBorderTwoToneIcon />}
        >
          React
        </Button>
        <Button
          onClick={handleCommentClick}
          aria-label='share'
          startIcon={<ChatBubbleOutlineTwoToneIcon />}
        >
          Comment
        </Button>
        {noComment && (
          <Alert
            style={{ float: 'right', justifySelf: 'center' }}
            variant='outlined'
            severity='info'
          >
            No comment !
          </Alert>
        )}
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
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
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
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography> */}

          {props?.post?.comments?.map((comment) => (
            <Comment key={comment.id} comment={comment}></Comment>
          ))}
          {interaction === 'comment' && (
            <PostComment user={props.user}></PostComment>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
