import { heroes } from '../heroes';

export const FETCH_HEROES = 'FETCH_HEROES';
export const REGISTER_ACTIVE_HERO   = 'REGISTER_ACTIVE_HERO';

export const TOGGLE_GRID = 'TOGGLE_GRID';



// HEROES
// export const fetchHeroes = () => {
//     const url = 'https://hotsapi.net/api/v1/heroes';
//     const request = fetch( url )
//         .then( response => {
//             return response.json();
//         })
//         .catch( err => {
//             throw( err );
//         });
    
//     return {
//         type   : FETCH_HEROES,
//         payload: request
//     };
// };
export const fetchHeroes = () => {
    return {
        type: FETCH_HEROES,
        payload: heroes
    }
}

export const registerActiveHero = hero => {
    return {
        type   : REGISTER_ACTIVE_HERO,
        payload: hero
    }
};


// GRID
export const toggleGrid = () => {
    return {
        type: TOGGLE_GRID
    }
}