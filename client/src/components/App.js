import React from 'react';
import Landing from './pages/Landing';
import Header from './Header';
import Chatbot from './chatbot/chatbot'
import {BrowserRouter, Route} from 'react-router-dom'
import About from './pages/About';
import Shops from './shop/Shops';
const App=()=>{
    return(
        <div >

            
            <BrowserRouter>
            <div className="container">
            <Header/>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/Shop" component={Shops}/>
                <Route exact path="/About" component={About}/>
                <Chatbot/>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default App;