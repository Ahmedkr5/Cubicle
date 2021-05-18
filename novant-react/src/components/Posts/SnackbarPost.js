import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    backgroundColor: '#FFF',
  },
  close: {
    position: 'absolute',
    right: '4%',
    padding: 0,
    marginRight: '0%',
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: '#F0F2F5',
    color: 'black',
    width: '100%',
  },
  snackbarDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
  },
}));

export default function SnackbarPost(props) {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    props.parentCallbackSnackbar(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const classes = useStyles();
  return (
    <div>
      <Snackbar
        style={{
          displa: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }}
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        onExited={handleExited}
        // message={props?.message ? props.message : undefined}
        // action={
        //   <React.Fragment className={classes.snackbar}>
        //     {/* <Button color='secondary' size='small' onClick={handleClose}>
        //       UNDO
        //     </Button> */}
        //     <IconButton
        //       aria-label='close'
        //       color='inherit'
        //       className={classes.close}
        //       onClick={handleClose}
        //     >
        //       <CloseIcon />
        //     </IconButton>
        //   </React.Fragment>
        // }
      >
        <SnackbarContent
          aria-describedby='message-id2'
          className={classes.snackbarStyleViaNestedContent}
          message={
            <span id='message-id2' className={classes.snackbarDisplay}>
              <div style={{ textAlign: 'center' }}>
                {props?.message ? props.message : undefined}
              </div>
              {/* <IconButton
                aria-label='close'
                color='inherit'
                className={classes.close}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton> */}
            </span>
          }
        />
      </Snackbar>
    </div>
  );
}
