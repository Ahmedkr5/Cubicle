import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';

import LinkIcon from '@material-ui/icons/Link';

export default class Clipboardbutton extends Component {
    constructor(props) {
        super(props);
  this.state = {
    value: '',
    copied: false,
  };



   }

  render() {
    return (
      <div>
      
     

        <CopyToClipboard text={window.location.href}
          onCopy={() => this.setState({copied: true})}>
            <Button
        variant="contained" color="primary"
          startIcon={<LinkIcon/>} >
          Copy Group Link
        </Button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'green'}}>Copied ✔</span> : null}
      </div>
    );
  }
}
