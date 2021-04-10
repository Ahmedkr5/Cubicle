


import Navbar from '../components/Navbar/Navbar'
import React, { useEffect,Suspense,useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactDOM from 'react-dom';

const MiddleAppChat = React.lazy(() => import('../components/chatApp/MiddlleAppChat'));





const RightList = React.lazy(() => import('../components/chatApp/RightList'));
const LeftAppChat = React.lazy(() => import('../components/chatApp/leftAppChat'));










export default function ChatApp(props) {

    const [user,setUser] = useState('606b5971ff93a747240e8251') ;

   const myhandler = (val) => {
      setUser(val)
      }
  


    return (
        <>

            <Navbar></Navbar>

            
            <div className='container-fluid'>
           

               
                <div className='row'>
                    <div className='col-3'>
                    <Suspense fallback={ <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}>

                        <RightList handler= {myhandler}  />
                    </Suspense>
                    </div>
                    <div className='col-6'>
                    <Suspense fallback={<div>Chargement...</div>}>
                        {<MiddleAppChat userck = {user}    />}
                    </Suspense>
                    </div>
                    <div className='col-3'>
                  
                    <Suspense fallback={<div>Chargement...</div>}>
                        <LeftAppChat />
                    </Suspense> 
                    </div>
                </div>
            </div>
            
        </>

    )
}