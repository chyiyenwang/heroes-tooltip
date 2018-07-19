import React from 'react';
import HeroCardList from '../card/heroCardList';


const GridRows = (props) => {
    const { data } = props;

    if (data.length > 0) {
        return data.map( ( currentRow, idx ) => {
            return (
                <div
                    key={ idx }
                    className='HTT__grid-row'>

                    <HeroCardList 
                        isClickable
                        heroes={ currentRow } />

                </div>
            );

        });
    }

    return null;
};

export default GridRows;