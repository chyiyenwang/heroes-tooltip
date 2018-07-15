
import './app.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchHeroes, toggleGrid } from '../actions/index';

import Grid from './grid/grid';
import Card from './card/card';


type Props = {}

type State = {
    showGrid: boolean,
    selectedHero: ?string,
    sortedHeroes: Array<any>
}


const mapStateToProps = state => {
    return {
        sortedHeroes: state.heroes.sorted
    }
}


class App extends Component {
    componentDidMount() {
        this.props.fetchHeroes();
    }

    render() {
        return (
            <div className='overlay'>
                { this.renderGrid() }

                { this.renderActiveHero() }
            </div>
        )
    }

    renderActiveHero() {
        const { sortedHeroes } = this.props;
        
        if ( sortedHeroes.length > 0 ) {
            const initialHero = sortedHeroes[ 0 ];

            return (
                <Card
                    isClickable
                    type='activeHero'
                    hero={ initialHero } />
            )
        };

        return null;
    }

    renderGrid() {
        const { 
            sortedHeroes
        } = this.props;

        return (
            <Grid heroes={ sortedHeroes } />
        )
    }
};


export default connect( mapStateToProps, { fetchHeroes, toggleGrid } )( App );