import React ,{ useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import FormDialog from '../FormDialog';
import Experience from './Experience';
import authService from '../../../services/auth.service';
import { useApi } from '../../../hooks/useApi';
import experienceService from '../../../services/experience.service';

export default function Experiences(props) {
  const [data, setData] = useState();
  const userid = props.userid;
  const [userProf, err1, reload1] = useApi('experiences/'+ userid);

  const currentuser = authService.getCurrentUser() ;

  

  return (
    <div>
    
  
    <div className="row justify-content-center">
      <div className="col-md-12">
      { currentuser['id']==userid  &&  <div style={{display:"flex",alignItems:'flex-end',justifyContent:'flex-end',marginLeft:'500px'}}><FormDialog userid={props.userid}></FormDialog>
        </div>
        
      }

        <Divider style={{marginTop:"20px",marginBottom:"20px"}}></Divider>
<div>
                        
                        {userProf?.map((key, value) => (
                                  
                                 <Experience title={key.title} date={key.date} description={key.description} ></Experience>
                                  ))}

              </div>



            </div>
          
        </div>
        
      </div>
  );
}