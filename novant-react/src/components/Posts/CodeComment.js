import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%',
    marginBottom: '10px',
    overflow: 'auto',
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
    padding: '0px 15px',
    borderRadius: '15px',
    width: '100%',
  },
  commentUserName: {
    textAlign: 'left',
    marginBottom: '2px',
    paddingBottom: '2px',
    marginTop: '2px',
    paddingTop: '2px',
    cursor: 'pointer',
  },
  code: {
    textAlign: 'left',
    borderRadius: '15px',
    height: 'auto',
  },
  CodeMirror: {
    height: 'auto',
  },
  CodeMirrorScroll: {
    maxHeight: '50px',
  },
  submit: {
    margin: '10px',
    borderRadius: '10px',
  },
}));

export default function CodeComment(props) {
  const classes = useStyles();
  const [code, setCode] = React.useState('');

  return (
    <div className={classes.root}>
      <Avatar aria-label='recipe' variant='rounded' className={classes.rounded}>
        H
      </Avatar>
      <div className={classes.commentBody}>
        <CodeMirror
          className={classes.code}
          value={code}
          options={{
            mode: 'javascript',
            theme: 'base16-light',
            lineWrapping: true,
            smartIndent: true,
            lineNumbers: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            autoCloseTags: true,
            keyMap: 'sublime',
            matchBrackets: true,
            autoCloseBrackets: true,
            extraKeys: {
              'Ctrl-Space': 'autocomplete',
            },
            scrollbarStyle: 'null',
            autofocus: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
          onChange={(editor, data, value) => {
            console.log(value);
          }}
        />
        <Button
          className={classes.submit}
          variant='contained'
          color='secondary'
          disableElevation
        >
          Solve
        </Button>
      </div>
    </div>
  );
}
