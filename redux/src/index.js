import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store_file';
import Routing from './comonenent/Routing'

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>,document.getElementById('root')
)