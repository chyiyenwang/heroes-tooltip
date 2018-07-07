
import React from 'react';


const GridRows = props => {
    let { data, renderRow } = props;
    
    if ( data.length > 0 ) {
        return data.map( ( currentRow, idx ) => {
            return (
                <div
                    key={ idx }
                    className='grid-row'>

                    { renderRow( currentRow ) }
                    
                </div>
            )

        })
    }

    return null;
};

export default GridRows;