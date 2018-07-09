import React from 'react';
import Card from './card';


const CardList = ( props ) => {
    const { heroes } = props;

    if ( heroes.length > 0 ) {
        return heroes.map( ( hero, idx ) => {
            return (
                <Card
                    key={ idx }
                    image={ hero.icon_url[ '92x93' ] } />
            );
        });
    };
};

export default CardList;