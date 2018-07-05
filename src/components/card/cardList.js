import React from 'react';
import Card from './card';

const CardList = props => {
    let { heroes } = props;

    if ( heroes ) {
        return heroes.map( ( hero, idx ) => {
            return (
                <Card
                    key={ idx }
                    image={ hero.icon_url[ '92x93' ] } />
            )
        })
    }

    return null;
}

export default CardList;