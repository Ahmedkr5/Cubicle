import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import SetCV from '../SetCV';
import FormDialog from '../FormDialog';
import experienceService from '../../../services/experience.service';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Experience(props) {

  return (
      <div>
    <div className="row">
          
          <Typography variant="h5" color="primary">
          {props.title} :
          </Typography>
        </div>
        <div className="row">
          
          <Typography>
          date :{props.date}
          </Typography>
        </div>
        <div className="row">
          
          <Typography style={{textAlign:'left'}}>
          {props.description}
                    </Typography>
        </div>
        </div>
        
  );
}