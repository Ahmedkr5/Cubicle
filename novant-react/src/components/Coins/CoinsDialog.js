import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function CoinsDialog(prop) {
  console.log(prop.userid)
  const [open, setOpen] = React.useState(false);
  var token ;
  var data = {
    "vendor": 1790,
    "amount": prop.name,
    "note" : "Order #1000132"
  }
  const handleClickOpen = () => {
    const headers = {
      'Authorization': 'Token 16a40ef7750cbf8ce3668ef24c1e331de1e96c6f'
    }
    
    axios.post( " https://sandbox.paymee.tn/api/OPRequest/" , data, {
        headers: headers
      })
      .then((response) => {
        console.log(response.data.token)
        token = response.data.token ;
        var bodyFormData = new FormData();
        bodyFormData.append('payment_token', response.data.token);
        bodyFormData.append('url_ok', window.location.href);
        bodyFormData.append('url_ko',window.location.href);

        axios({
          method: "post",
          url: "https://sandbox.paymee.tn/gateway/",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            var str = response.data;
            //handle success
            
   
            document.getElementById('a').innerHTML=str;
            console.log(document.getElementById('login_form').action);

            document.getElementById('login_form').action="https://sandbox.paymee.tn/gateway/"+token+"/?paymee";
            console.log(document.getElementById('login_form').action);

            var y = document.getElementsByClassName('col text-left');
var aNode = y[0];
var child = aNode.firstChild;
child.src="https://sandbox.paymee.tn/static/img/gateway_logo.png"
console.log(child)



          })
          })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {prop.name} DT
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Buy {prop.value} Coins with {prop.name} DT</DialogTitle>
        <DialogContent>
          <div id="a"></div>
     </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}