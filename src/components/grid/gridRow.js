import React from 'react';
import Card from './card';


const GridRow = ( props ) => {
    let { heroes } = props;
    
    if ( heroes.length > 0 ) {
        return heroes.map( ( row, rowNumber ) => {
            return row.map( ( hero, idx ) => {
                return (
                    <Card
                        key={ idx }
                        even={ rowNumber % 2 === 0 ? true : false }
                        image={ hero.icon_url[ '92x93' ] } />
                );
            });
        });
    };

    return null;
};

export default CardList;