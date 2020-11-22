import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import Profile from './Profile';
import UserList from './Userlist';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/users" component={UserList}/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;