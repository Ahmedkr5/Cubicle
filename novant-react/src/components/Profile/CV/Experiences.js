import React ,{useEffect,useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import SetCV from '../SetCV';
import FormDialog from '../FormDialog';
import experienceService from '../../../services/experience.service';
import Experience from './Experience';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Experiences(props) {
  const [data, setData] = useState();

  useEffect(() => {

    var experiences = experienceService.get(props.userid);
    const elements = [];
     
    let items = [];
    let animals  = [];  
    experiences.then(
      function(value) {
      setData(value);
       } );
       console.log(experiences)
      }, []);

  return (
    <div>
    
  
    <div className="row justify-content-center">

        <div className="col-md-12">
        <div style={{display:"flex",alignItems:'flex-end',justifyContent:'flex-end',marginLeft:'500px'}}><FormDialog userid={props.userid}></FormDialog>
        </div>
        


        <Divider style={{marginTop:"20px",marginBottom:"20px"}}></Divider>
<div>

<ul>
 
{data ? 
  <Experience title={data[0].title} date={data[0].date} description={data[0].description}></Experience> : null}
    </ul>
        </div>




            </div>
          
        </div>
        
      </div>
  );
}