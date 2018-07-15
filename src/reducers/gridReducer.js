import { TOGGLE_GRID } from '../actions/index';


const INITIAL_STATE = {
    isOpen: false
};

const gridReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case TOGGLE_GRID: {
            return {
                isOpen: !state.isOpen
            }
        }

        default: {
            return state;
        }
    }
};

export default gridReducer;