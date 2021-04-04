import { faBell, faCoffee, faExchangeAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Divider, Typography } from "@material-ui/core";
import Badge from "./components/Profile/Badges/Badge";


function Badges() {
  return (
    <div>
        <Container style={{borderRadius: '10px'  ,backgroundColor:"white"}}>
            <div style={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h6" gutterBottom>
         User Badges / Experience Points
      </Typography>
      </div>
        <Typography variant="h6" gutterBottom>
        <FontAwesomeIcon icon={faUsers} style={{marginRight:"10px"}} />
         Friendly User
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      You have more than 50 friends
      </Typography>
               <Badge value="50"></Badge>


               <Typography variant="h6" gutterBottom>
               <FontAwesomeIcon icon={faCoffee} style={{marginRight:"10px"}} />
         Java Expert
      </Typography>
               <Typography variant="subtitle1" gutterBottom>
               You have solved more than 80 problems in "Java".
      </Typography>
               <Badge value="80"></Badge>
              


               <Typography variant="h6" gutterBottom>
               <FontAwesomeIcon icon={faExchangeAlt} style={{marginRight:"10px"}} />
               Events Promoter
      </Typography>
               <Typography variant="subtitle1" gutterBottom>
               You have created 10 public or private events.
      </Typography>
               <Badge value="100"></Badge>

    
               <Typography variant="h6" gutterBottom>
         React Expert
      </Typography>
               <Typography variant="subtitle1" gutterBottom>
               You have solved more than 75 problems in "Java".
      </Typography>
               <Badge value="75"></Badge>


               <Typography variant="h6" gutterBottom>
         Nothing to Hide
      </Typography>
               <Typography variant="subtitle1" gutterBottom>
               You have completed all your profile fields..
      </Typography>
               <Badge value="100"></Badge>
              

               


               <Typography variant="h6" gutterBottom>
               Universe Explorer
      </Typography>
               <Typography variant="subtitle1" gutterBottom>
               You have visited more than 80 different user profiles.
      </Typography>
               <Badge value="40"></Badge>

               </Container>
               <Divider style={{marginTop:"20px"}}></Divider>
    </div>
  );
}

export default Badges;
