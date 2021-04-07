


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/Navbar'
import React, { Suspense } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const RightList = React.lazy(() => import('../components/chatApp/RightList'));
const MiddleAppChat = React.lazy(() => import('../components/chatApp/MiddlleAppChat'));
const LeftAppChat = React.lazy(() => import('../components/chatApp/leftAppChat'));






export default function ChatApp() {
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
                        <RightList />
                    </Suspense>
                    </div>
                    <div className='col-6'>
                    <Suspense fallback={<div>Chargement...</div>}>
                        <MiddleAppChat />
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