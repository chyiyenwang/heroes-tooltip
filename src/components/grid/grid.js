import './grid.scss';
import React, { Component } from 'react';
import CardList from '../card/cardList';

export default class Grid extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            gridRows: []
        };
    }

    componentDidUpdate( prevProps, prevState ) {
        let { heroes } = this.props;

        if ( heroes.length >= 0 && prevProps.heroes.length === 0 ) {
            this.groupHeroes( heroes )
        };
    }

    render() {
        let { gridRows } = this.state;

        return (
            <div className='grid' ref='grid'>
                { this.renderRows() }
            </div>
        );
    }

    groupHeroes( sortedHeroes ) {
        let allRows = [];
        let evenRow = [];
        let oddRow  = [];

        sortedHeroes.forEach( ( hero, idx, sortedHeroes ) => {
            if ( evenRow.length < 11 ) {
                evenRow.push( hero );
            }
            else if ( oddRow.length < 10 ) {
                oddRow.push( hero );
            };

            if ( ( evenRow.length === 11 && oddRow.length === 10 ) || ( idx === sortedHeroes.length - 1 ) ) {
                allRows.push( evenRow, oddRow );

                evenRow = [];
                oddRow  = [];
            };
        });

        this.setState({ gridRows: allRows });
    }

    renderRows() {
        let { gridRows } = this.state;

        return gridRows.map( ( row, idx ) => {
            return (
                <div
                    key={ idx } 
                    className={ idx % 2 === 0 ? 'row' : 'row' } >
                    <CardList heroes={ row } />
                </div>
            )
        })
    }
};