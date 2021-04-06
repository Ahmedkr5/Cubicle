import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CoinCard from './CoinCard';
import { Container } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

export default function AchatCoins() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default"      style={{marginBottom:"20px" ,borderRadius: '10px'    }}>
      <Typography>
        <Container style={{display:"flex",flexDirection:"row" , justifyContent:"space-between" , flexWrap:"wrap",    borderRadius:"100px"}}>
          <CoinCard value="100" name="10"></CoinCard>
          

          <CoinCard value="700" name="70"></CoinCard>
          
          <CoinCard value="1000" name="100"></CoinCard>

          <CoinCard value="Custom" name="Custom"></CoinCard>


          </Container>
      </Typography>
      
      </AppBar>

    </div>
    
  );
}