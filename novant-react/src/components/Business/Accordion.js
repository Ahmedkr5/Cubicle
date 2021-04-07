import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MyBusinessesList from './MyBusinessesList';
import MembersList from './MembersList';
import QuizzesList from './QuizzesList';
import Settings from './Settings';
import Button from '@material-ui/core/Button';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  addbutton: {
    marginLeft: '70%',
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
        >
          <Typography className={classes.heading}>Manage My Businesses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyBusinessesList></MyBusinessesList>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className={classes.heading}>Manage Members</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MembersList></MembersList>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
        >
          <Typography className={classes.heading}>Manage Quizzes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.addbutton}
                startIcon={<AddBoxOutlinedIcon />}
            >
            Add a new quiz
            </Button>
            <br></br>
            <br></br>
            <QuizzesList></QuizzesList>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
        >
          <Typography className={classes.heading}>Manage Business Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Settings></Settings>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}