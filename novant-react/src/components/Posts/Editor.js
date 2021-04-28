import EditorJs from 'react-editor-js';

import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from './MarkerTool';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import newCodeTool from './newCodeTool';
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
  image: Image,
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

export default function Editor(props) {
  // var divToFix = document.getElementsByClassName('codex-editor__redactor');
  // divToFix.style.paddingBottom = '20px';
  return (
    // <EditorJs
    //   readOnly
    //   tools={para}
    //   data={{
    //     blocks: [
    //       {
    //         type: 'paragraph',
    //         data: {
    //           text:
    //             'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
    //         },
    //       },
    //       {
    //         type: 'code',
    //         data: {
    //           code: 'this is a code.',
    //         },
    //       },
    //     ],
    //   }}
    // />
    <EditorJs
      tools={EDITOR_JS_TOOLS}
      placeholder={'lets add a new post'}
      onChange={() => {
        // var divToFix = document.querySelector(
        //   '#editor-js-ko0oc91h > div > div.codex-editor__redactor'
        // );
        // console.log(divToFix);
        // divToFix.style['padding-bottom'] = '20px';
      }}
    />
  );
}
