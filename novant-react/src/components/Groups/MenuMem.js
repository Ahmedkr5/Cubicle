import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();




export default function MenuMem(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon  />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
          
            width: '22ch',
          },
        }}
      >
         <MenuItem onClick={()=>{ history.push('/Profile/'+props.id); window.location.reload();}}>Profile</MenuItem>
       
        <MenuItem onClick={handleClose}>Remove from group</MenuItem>
      </Menu>
    </div>
  );
}
