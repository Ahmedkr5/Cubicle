

import RightList from '../components/chatApp/RightList'
import MiddleAppChat from '../components/chatApp/MiddlleAppChat'
import LeftAppChat from '../components/chatApp/leftAppChat'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ChatApp() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'>
                        <RightList />
                    </div>
                    <div className='col-6'>
                        <MiddleAppChat />
                    </div>
                    <div className='col-3'>
                        <LeftAppChat />
                    </div>
                </div>
            </div>
        </>

    )
}