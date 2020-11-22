import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home';
import {Provider} from 'react-redux';
import store from './store/store_file';

//connected View to the store
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,document.getElementById('root')
)

