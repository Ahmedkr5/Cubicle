import EditorJs from 'react-editor-js';

import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import ImageTool from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '../MarkerTool';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import newCodeTool from '../newCodeTool';
import CodeBox from '@bomdi/codebox';

const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: {
    class: Paragraph,
    toolbar: true,
  },
  list: List,
  warning: Warning,
  code: newCodeTool,
  linkTool: LinkTool,
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:3001/post/upload/Test.png', // Your backend file uploader endpoint
      },
    },
  },
  raw: Raw,
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

export default function ShowEditor(props) {
  const x = JSON.parse(props?.data);
  var blocks = [''];
  x.blocks.map((key) => {
    blocks.push(key);
    // * console.log(key);
  });
  var y = {
    blocks: x.blocks,
  };
  // * console.log(y.blocks);
  // * console.log(x.blocks);
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
      data={{
        blocks: [
          {
            type: 'paragraph',
            data: {
              text:
                'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
            },
          },
          {
            type: 'code',
            data: {
              language: 'CSS',
              text: 'inshallah tekhdem',
            },
          },
        ],
      }}
      readOnly
    />
  );
}
