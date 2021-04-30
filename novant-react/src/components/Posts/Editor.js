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
      endpoint: 'http://localhost:3001/post/link/', // Your backend endpoint for url data fetching
    },
  },
  // image: {
  //   class: ImageTool,
  //   config: {
  //     endpoints: {
  //       byFile: 'http://localhost:3001/post/upload/Test.png', // Your backend file uploader endpoint
  //     },
  //   },
  // },
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

const para = {
  paragraph: Paragraph,
  quote: Quote,
  code: newCodeTool,
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
          byFile: 'http://localhost:3001/post/upload/' + props.user.id, // Your backend file uploader endpoint
        },
        // uploader: {
        //   /**
        //    * Upload file to the server and return an uploaded image data
        //    * @param {File} file - file selected from the device or pasted by drag-n-drop
        //    * @return {Promise.<{success, file: {url}}>}
        //    */
        //   uploadByFile(file) {
        //     // your own uploading logic here
        //     axios.post(
        //       'http://localhost:3001/post/upload/' + props.user.id,
        //       file,
        //       { headers: { 'Content-Type': 'application/json', Date: 'true' } }
        //     );
        //   },
        // },
      },
    },
  };
  // var divToFix = document.getElementsByClassName('codex-editor__redactor');
  // divToFix.style.paddingBottom = '20px';
  return (
    // <EditorJs
    //   readOnly
    //   tools={para}
    // data={{
    //   blocks: [
    //     {
    //       type: 'paragraph',
    //       data: {
    //         text:
    //           'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
    //       },
    //     },
    //     {
    //       type: 'code',
    //       data: {
    //         code: 'this is a code.',
    //       },
    //     },
    //   ],
    // }}
    // />
    <EditorJs
      tools={EDITOR_JS_TOOLS}
      placeholder={'lets add a new post'}
      onChange={() => {
        setDate(Date.now());

        // var divToFix = document.querySelector(
        //   '#editor-js-ko0oc91h > div > div.codex-editor__redactor'
        // );
        // console.log(divToFix);
        // divToFix.style['padding-bottom'] = '20px';
      }}
    />
  );
}
