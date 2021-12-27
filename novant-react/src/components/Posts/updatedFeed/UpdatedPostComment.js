import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Editor from '../Editor';
import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';
import { useLazyQuery, useMutation, gql } from '@apollo/client';
import authService from '../../../services/auth.service';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%',
    marginBottom: '10px',
    width: 'inherit',
  },

  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: red[500],
    cursor: 'pointer',
  },
  commentBody: {
    backgroundColor: '#F0F2F5',
    marginLeft: '10px',
    padding: '1px 15px',
    borderRadius: '15px',
    overflow: 'auto',
    width: '100%',
  },
  commentText: {
    wordWrap: 'break-word',
    textAlign: 'left',
  },
  input: {
    float: 'left',
    marginRight: '0px',
    marginTop: '5px',
    width: 'inherit',
  },
  iconButton: {
    float: 'right',
    marginLeft: '0px',
  },
}));

const ADD_COMMENT = gql`
  mutation AddTodo(
    $userId: ID!
    $postId: ID!
    $description: String!
    $created_at: String!
  ) {
    addComment(
      userId: $userId
      postId: $postId
      description: $description
      created_at: $created_at
    ) {
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

export default function UpdatedPostComment(props) {
  const wrapper = React.createRef();
  const user = authService.getCurrentUser();
  const [addComment, { data }] = useMutation(ADD_COMMENT);

  const classes = useStyles();

  const [descritption, setDescription] = useState({});
  const [commented, setCommented] = useState(false);

  const handleDescription = (childData) => {
    setDescription(childData);
  };

  const handleComment = async () => {
    await addComment({
      variables: {
        userId: props.user.id,
        postId: props.postId,
        description: JSON.stringify(descritption),
        created_at: Date.now().toString(),
      },
    });
    props.callbackComment();
    // console.log('data', data);
    setCommented(!commented);
  };

  console.log(props.user.id);

  return (
    <div className={classes.root}>
      <Avatar
        aria-label='recipe'
        variant='rounded'
        className={classes.rounded}
        name={user?.firstname + ' ' + user?.lastname}
        alt={user?.firstname + ' ' + user?.lastname}
        onClick={() => window.location.replace(`/profile/${user?.id}`)}
        src={'https://mycubicle.herokuapp.com/uploads/' + user?.profileimage}
      ></Avatar>
      <div className={classes.commentBody}>
        {commented && (
          <Editor
            style={{ marginBottom: '10px' }}
            parentCallbackDescription={handleDescription}
            user={props?.user}
          />
        )}
        {!commented && (
          <Editor
            style={{ marginBottom: '10px' }}
            parentCallbackDescription={handleDescription}
            user={props?.user}
          />
        )}
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='emoji'
          onClick={handleComment}
        >
          <PostAddTwoToneIcon />
        </IconButton>
      </div>
    </div>
  );
}
