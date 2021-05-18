import React from 'react';
import FriendReq from './FriendReq';
import Req from './Req';
import authService from "../../services/auth.service";
        


 



  export default function  FriendList() {
    const currentuser = authService.getCurrentUser() ;
return(<>
    
       
       
       <div style={{display:'flex',flexDirection:'row',flexFlow:'wrap',marginLeft:'55px'}}>
     <Req></Req>
            
    </div>
  </>
);





}