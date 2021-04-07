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

export default function Experience() {

  return (
      <div>
    <div className="row">
          
          <Typography variant="h5" color="primary">
          aa
          </Typography>
        </div>
        <div className="row">
          
          <Typography>
          bb
          </Typography>
        </div>
        <div className="row">
          
          <Typography style={{textAlign:'left'}}>
          cc
                    </Typography>
        </div>
        </div>
        
  );
}