import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import gridReducer from './gridReducer';


const rootReducer = combineReducers({
    heroes: heroesReducer,
    grid  : gridReducer
});

export default rootReducer;