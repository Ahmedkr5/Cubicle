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
import CloseIcon from '@material-ui/icons/Close';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider';
import Comment from './Comment';
import SkeletonComment from './SkeletonComment';
import PostComment from './PostComment';
import CodeComment from './CodeComment';
import { useLazyQuery, gql } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';

import Editor from './Editor';

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

export default function AddPost(props) {
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
          <IconButton
            aria-label='settings'
            onClick={() => {
              props.parentCallback(false);
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
        <Editor style={{ marginBottom: '5px' }} />
      </CardContent>
      <Divider variant='middle' style={{}} />
      <CardActions disableSpacing>
        <Button
          aria-label='add to favorites'
          startIcon={<CloseIcon />}
          onClick={() => {
            props.parentCallback(false);
          }}
        >
          Annuler
        </Button>
        <Button
          onClick={handleCommentClick}
          aria-label='share'
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
