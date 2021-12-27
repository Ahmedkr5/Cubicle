import EditorJs from 'react-editor-js';

import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
// import Warning from '@editorjs/warning';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
// import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from './MarkerTool';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import newCodeTool from './newCodeTool';
import { useState } from 'react';

var EDITOR_JS_TOOLS = {
  table: Table,
  embed: Embed,
  paragraph: {
    class: Paragraph,
    toolbar: true,
  },
  list: List,
  code: newCodeTool,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: 'https://mycubicle.herokuapp.com/post/link/', // Your backend endpoint for url data fetching
    },
  },
  header: {
    class: Header,
    toolbar: true,
  },
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

export default function Editor(props) {
  const [date, setDate] = useState(Date.now());
  // console.log(props.user.id + '-' + date);
  EDITOR_JS_TOOLS = {
    ...EDITOR_JS_TOOLS,
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile:
            'https://mycubicle.herokuapp.com/post/upload/' + props?.user?.id, // Your backend file uploader endpoint
        },
      },
    },
  };
  return (
    <EditorJs
      tools={EDITOR_JS_TOOLS}
      placeholder={'Click here and let the magic begin ...'}
      onChange={(_, outputData) => {
        props.parentCallbackDescription(outputData);
      }}
      // save={(outputData) => {
      //   props.parentCallbackDialog(outputData);
      // }}
    />
  );
}
