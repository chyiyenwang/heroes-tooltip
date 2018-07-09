import './grid.scss';
import React, { Component } from 'react';
import CardList from '../card/cardList';
import GridRows from '../grid/gridRows';


export default class Grid extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            gridRows: []
        };
    }

    componentDidUpdate( prevProps, prevState ) {
        const { heroes } = this.props;

        if ( heroes.length >= 0 && prevProps.heroes.length === 0 ) {
            this.groupHeroesByRows( heroes )
        };
    }

    render() {
        const { gridRows } = this.state;

        return (
            <div className='grid' ref='grid'>
                <GridRows data={ gridRows }/>
            </div>
        );
    }

    groupHeroesByRows( sortedHeroes ) {
        let evenRow   = [];
        let oddRow    = [];
        const allRows = [];
        
        sortedHeroes.forEach( ( hero, idx, sortedHeroes ) => {
            const evenRowMax      = 11;
            const oddRowMax       = 10;
            const rowsMaxed       = evenRow.length === evenRowMax && oddRow.length === oddRowMax;
            const lastRowItem     = idx === sortedHeroes.length - 1;
            const rowHasOddItems  = oddRow.length % 1 === 0;

            if ( rowsMaxed || lastRowItem ) {
                if ( lastRowItem && rowHasOddItems ) {
                    const emptyHero = {
                        icon_url: {
                            '92x93': null
                        }
                    };

                    oddRow.push( emptyHero );
                }

                allRows.push( evenRow, oddRow );

                evenRow = [];
                oddRow  = [];
            }

            if ( evenRow.length < evenRowMax ) {
                return evenRow.push( hero );
            }
            else if ( oddRow.length < oddRowMax ) {
                return oddRow.push( hero );
            };
        });

        this.setState({ gridRows: allRows });
    }
};