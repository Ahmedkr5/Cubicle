import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useState } from "react";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AchatCoins from "./components/Coins/AchatCoins";
import ExchangeCoins from "./components/Coins/ExchangeCoins";
import Transactions from "./components/Coins/Transactions";
import { Flag } from "@material-ui/icons";
import Sidebar from "./components/Sidebar/Sidebar";



function Coins() {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
 return (
    <div style={{backgroundColor : '#EBEDF0'}}>
          <link rel="stylesheet" href="css/bootstrap.min.css"/>    

     

                <Container>
                <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    
     style={{marginBottom:"10px" ,borderRadius: '10px'    }}
    >
      <BottomNavigationAction onClick={()=>setState("0")} label="Buy Coins" icon={<RestoreIcon />} />
      <BottomNavigationAction onClick={()=>setState("1")} label="Exchange Coins" icon={<FavoriteIcon />} />
      <BottomNavigationAction onClick={()=>setState("2")} label="Transactions" icon={<Flag />} />
    </BottomNavigation>
                {state == "0" && <AchatCoins></AchatCoins>}
                {state == "1" &&  <ExchangeCoins></ExchangeCoins> }
                {state == "2" &&  <Transactions></Transactions> }
                </Container>
    </div>
  );
}

export default Coins;
