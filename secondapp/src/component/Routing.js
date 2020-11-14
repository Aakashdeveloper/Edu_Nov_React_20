import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Hotels from './Hotels';
import Bookings from './Bookings';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/bookings" component={Bookings}></Route>
                <Route path="/hotels" component={Hotels}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;