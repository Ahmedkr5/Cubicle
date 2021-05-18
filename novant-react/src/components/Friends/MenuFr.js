import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { createBrowserHistory } from "history";
import axios from "axios";
import authService from "../../services/auth.service";
export const history = createBrowserHistory();




export default function MenuFr(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const [fr, setFr] = useState(null);
  const currentuser = authService.getCurrentUser();
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
       
        <MenuItem onClick={()=>{  setFr(()=>{
  
  const nofr = props?.friends?.filter(i => i !== currentuser['id']);
  const nofr2 = props?.myfriends?.filter(i => i !== props?.id);
 axios.put("http://localhost:3001/users/fr/" + props?.id, {
friends:nofr,

})
axios.put("http://localhost:3001/users/fr/" + currentuser['id'], {
    friends:nofr2,
    
    })
    .then(() => {
      window.location.reload();
    })
    
});
}}>Delete Friend</MenuItem>
      </Menu>
    </div>
  );
}
