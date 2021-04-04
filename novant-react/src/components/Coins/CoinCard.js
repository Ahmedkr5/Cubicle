import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from 'react-bootstrap';
import CoinsDialog from './CoinsDialog';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginTop:"25px",
    marginBottom:"25px",
    borderRadius:"10px",

  },
});

export default function CoinCard(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Coin"
          height="50"
          image="/images/coin.jpg"
          title="Coins"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"-50px", display:"flex" , justifyContent:"center"}}>
            {prop.value} Coins
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{alignItems:"center",justifyContent:"center"}}>
        
        <CoinsDialog name={prop.name} value={prop.value}></CoinsDialog>
      </CardActions>
    </Card>
  );
}