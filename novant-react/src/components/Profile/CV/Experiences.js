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

 
  <Experience title=" Senior Full-Stack Developer" date="06 Juin. 2020" description="Designing new databases and data schemas for the mission-critical 
          progressive web application improving data integrity and execution efficiency using EF, POSTGIS and ROLAP.
          Fully automated infrastructure and environments cloud provisioning related to the business-critical progressive web
           application that helped to achieve 25% decrease in infrastructure operating costs."></Experience>

<Experience title="Front End Developer" date="24 Mai. 2019" description="Design and implementation of the 99.99% up-time REST API for the business-critical online service, that provided critical connectivity channel for distributed functionality and increase system cohesion keeping manageable code complexity.
Fully automated infrastructure and environments cloud provisioning related to the critical external web app resulting in reduce of servers and infrastructure administration by 99%.
Handling full stack programming tasks for the development of the business-critical single page application utilizing ETL, FCM and Haml. As a result 9 bugs-free releases have been deployed just-in-time.
Revamping UI, UX and overall design aesthetic of the business-critical customers-facing portal, resulting in 84% increase in sales and product revenue.
Reviewing the quality of code for the mission-critical online service maintaining code and design consistency across different team members
Scoping project requirements using Agile & Scrum principles related to the mission-critical single page application that helped prioritize developing activities and reduce ad hoc work requests by 39%."></Experience>
        </div>




            </div>
          
        </div>
        
      </div>
  );
}