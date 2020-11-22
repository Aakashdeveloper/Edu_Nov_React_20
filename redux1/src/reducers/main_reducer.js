import {combineReducers} from 'redux';
import films from './movie_reducer';

const rootReducer = combineReducers({
    films
});

export default rootReducer;