import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  code: {
    textAlign: 'left',
    height: 'auto',
    overflow: 'auto',
  },
  CodeMirror: {
    height: 'auto',
  },
  CodeMirrorScroll: {
    maxHeight: '50px',
  },
}));

export default function CodeComment() {
  const classes = useStyles();
  const [code, setCode] = React.useState(
    'public function Test(int a, int b):{ \n return a+b;\n } '
  );

  return (
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
        readOnly: 'nocursor',
      }}
      onBeforeChange={(editor, data, value) => {
        setCode(value);
      }}
      onChange={(editor, data, value) => {}}
    />
  );
}
