import React from 'react';
import FriendReq from './FriendReq';
import Reqfr2 from './Reqfr2';
import authService from "../../services/auth.service";
        


 



  export default function  FriendList() {
    const currentuser = authService.getCurrentUser() ;
return(<>
    
       
       
       <div style={{display:'flex',flexDirection:'row',flexFlow:'wrap',marginLeft:'55px'}}>
     <Reqfr2 requests={currentuser['id']}></Reqfr2>
            
    </div>
  </>
);





}