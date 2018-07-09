import React from 'react';
import CardList from '../card/cardList';


const GridRows = (props) => {
    const { data } = props;

    if (data.length > 0) {
        return data.map( ( currentRow, idx ) => {
            return (
                <div
                    key={ idx }
                    className='grid-row'>
                    <CardList heroes={ currentRow } />
                </div>
            );

        });
    }

    return null;
};

export default GridRows;