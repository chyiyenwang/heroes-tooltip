import { FETCH_HEROES, REGISTER_ACTIVE_HERO } from '../actions/index';

const INITIAL_STATE = {
    sorted: [],
    active: {}
}

const heroesReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case FETCH_HEROES: {
            const heroes           = action.payload;
            const registeredHeroes = {};
            const heroNames        = [];
    
            // Check to see if a hero has been registered so we can make sure there are
            // no duplicate heroes. After we register the hero we will push that hero name to 
            // their respective row. Finally, we'll map through the sorted names and return 
            // the corresponding hero.
            heroes.forEach( hero => {
                if ( !registeredHeroes[ hero.name ] ) {
                    registeredHeroes[ hero.name ] = hero;
                    heroNames.push( hero.name );
                };
            });
    
            const sortedHeroes = heroNames.sort().map( hero => {
                return registeredHeroes[ hero ]
            });

            return {
                ...state,
                sorted: sortedHeroes
            };
        }

        case REGISTER_ACTIVE_HERO: {
            return {
                ...state,
                active: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default heroesReducer