import './grid.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridRows from '../grid/gridRows';


const mapStateToProps = state => {
    return {
        grid: state.grid
    }
};


class Grid extends Component {
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
        const { grid } = this.props;

        return (
            <div className={ grid.isOpen ? 'HTT__grid-container' : 'HTT__grid-container HTT__grid-invisible' }>
                <div className='HTT__grid'>
                    <GridRows data={ gridRows } />
                </div>
                <div className='HTT__grid-background'/>
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
                            '92x93': 'hidden'
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

export default connect( mapStateToProps )( Grid );