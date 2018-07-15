// @flow

import React from 'react';
import Card from './card';


type Props = {
    type  : 'hero' | 'talent',
    heroes: Array<Object>
};


const CardList = ( props: Props ) => {
    const { isClickable, heroes } = props;

    if ( heroes.length > 0 ) {
        const cards: Array<Object> = heroes.map( ( hero: Object, idx: number ) => {
            return (
                <Card
                    key={ idx }
                    isClickable
                    hero={ hero } />
            );
        });

        return cards;
    };
};

export default CardList;