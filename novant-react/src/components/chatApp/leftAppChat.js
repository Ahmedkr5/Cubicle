import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import IconButton from '@material-ui/core/IconButton';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import Badge from '@material-ui/core/Badge';
import MonetizationOnIcon from '@material-ui/icons/AttachMoney';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100%',
        height: '600px'
    },
    rad: {
        borderRadius: 20,
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '15px'


    },
    middle: {
        marginTop: '15px',
        textAlign: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {

    },

    pos: {
        marginBottom: 12,
        textAlign: 'center'
    },
}));

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div style={{ paddingTop: '20px',maxHeight:'600px',display:'scroll' }}>
            <Paper elevation={0} className={classes.root} >
                <Card elevation={0} className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>

                            <Avatar variant='rounded' src={`../assets/images/users/5.jpg`} className={classes.rad} />


                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.middle}>
                            Bayrem Zguimi
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Accoubts Manager Amix corp
        </Typography>
                        <Typography className={classes.middle}>

                            <IconButton className={classes.Icon} aria-label="delete">
                                <Badge badgeContent={17} color="primary"> <PeopleOutlineIcon fontSize="30" /> </Badge>

                            </IconButton>
                            <IconButton className={classes.Icon} aria-label="delete">
                                <Badge badgeContent={17} color="primary">  <MonetizationOnIcon fontSize="30" /> </Badge>
                            </IconButton>

                        </Typography>
                        <Typography variant="body2" component="p">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Shared files</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <a href="#"><span>style.css  </span></a><br />
                                        <a href="#"><span>index.html</span></a><br />
                                        <a href="#"><span>rapport.pdf </span></a><br />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Typography>
                        <Typography variant="body2" component="p" style={{marginTop:'20px'}}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Shared media content</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography >
                                        <div className="row"  >



                                            <div className="col-4" style={{ paddingRight: '2px', paddingLeft: '2px', paddingBottom: '4px' }}>
                                                <img src="../assets/images/users/4.jpg" className="rounded mx-auto d-block" style={{ height: '100px' }} />
                                            </div>
                                            <div className="col-4" style={{ paddingRight: '2px', paddingLeft: '2px', paddingBottom: '4px' }}>
                                                <img src="../assets/images/users/5.jpg" className=" rounded mx-auto d-block" style={{ height: '100px' }} />
                                            </div>
                                            <div className="col-4" style={{ paddingRight: '2px', paddingLeft: '2px', paddingBottom: '4px' }}>
                                                <img src="../assets/images/users/8.jpg" className="rounded mx-auto d-block" style={{ height: '100px' }} />
                                            </div>
                                            <div className="col-4" style={{ paddingRight: '2px', paddingLeft: '2px', paddingBottom: '4px' }}>
                                                <img src="../assets/images/users/6.jpg" className="rounded mx-auto d-block" style={{ height: '100px' }} />
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Typography>
                    </CardContent>

                </Card>
            </Paper>
        </div>

    );
}
