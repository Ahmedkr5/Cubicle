import React from 'react';
import { Cake, FindInPage, Flag, Home, HomeOutlined, Phone } from '@material-ui/icons';
import { Divider, Icon, IconButton, Typography } from '@material-ui/core';


export default function Aboutme() {

  return (
    <div>
    
  
      <div className="row">
        <div className="col-md-6 " >
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />

        <div className="col-md-5">
        <div className="row justify-content-center">
          <div className="col-md-4 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
          
          <Home color="primary" style={{marginRight:"10px"}} />
          <Typography variant="h6">
          Adress
          </Typography>
          </div>
          <div className="col-md-8 "style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
          <Typography>
          Rue 4180 Numéro 25 Cité ezzouhour 3 , Tunis.
          </Typography>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
          <Phone color="primary" style={{marginRight:"10px"}} />
          <Typography  variant="h6">
          Phone
          </Typography>
          </div>
          <div className="col-md-8 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
          <Typography>
          (+216) 21 955 535.
          </Typography>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 " style={{display:"flex",flexDirection:"row"  , alignItems:"center"}}  >
          <Cake color="primary" style={{marginRight:"10px"}} />
          <Typography  variant="h6">
          Birthday
          </Typography>
          </div>
          <div className="col-md-8 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
          <Typography>
          27 Dec. 1997
          </Typography>
          </div>
        </div>


            </div>
          
        </div>
        
      </div>

  );
}