import React from 'react';
import Landing from './pages/Landing';
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom'
import About from './pages/About';
import Shops from './shop/Shops';
const App=()=>{
    return(
        <div >

            
            <BrowserRouter>
            <div>
            <Header/>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/Shop" component={Shops}/>
                <Route exact path="/About" component={About}/>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default App;