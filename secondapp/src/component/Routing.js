import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Bookings from './booking/Bookings';
import Header from './Header';
import Footer from './Footer';
import ListingApi from './listing/ListingApi';
import DetailApi from './details/detailApi';
import PlaceBooking from './booking/placeBooking'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/viewbookings" component={Bookings}></Route>
                <Route path="/list/:id" component={ListingApi}></Route>
                <Route path="/details/:id" component={DetailApi}></Route>
                <Route path="/booking/:id" component={PlaceBooking}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;