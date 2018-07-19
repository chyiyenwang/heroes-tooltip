// @flow
import './app.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchHeroes, toggleGrid } from '../actions/index';

import Grid from './grid/grid';
import Card from './card/card';
import HeroCardList from './card/heroCardList';
import AbilityCardList from './card/abilityCardList';


type Props = {}

type State = {
    showGrid: boolean,
    selectedHero: ?string,
    sortedHeroes: Array<any>
}


const mapStateToProps = state => {
    return {
        heroes: state.heroes
    }
}


class App extends Component {
    componentDidMount() {
        this.props.fetchHeroes();
    }

    render() {
        return (
            <div className='HTT__overlay'>
                { this.renderGrid() }

                <div className='HTT__footer'>
                    <div className='HTT__active-hero'>
                        { this.renderActiveHero() }
                    </div>

                    <div className='HTT__abilities'>
                        { this.renderAbilities() }
                    </div>
                </div>
            </div>
        )
    }

    renderActiveHero() {
        const { heroes } = this.props;
        
        if ( heroes.sorted.length > 0 ) {
            const initialHero = heroes.sorted[ 0 ];
            const activeHero = heroes.active && heroes.active.name ? heroes.active : initialHero;

            return (
                <Card
                    isClickable
                    type='activeHero'
                    hero={ activeHero } />
            )
        };

        return null;
    }

    renderAbilities() {
        const { heroes } = this.props;

        if ( heroes.sorted.length > 0 ) {

            const initialHero = heroes.sorted[ 0 ];
            const activeHero = heroes.active && heroes.active.name ? heroes.active : initialHero;

            return <AbilityCardList hero={ activeHero }/>
        }

        return null;
    }

    renderGrid() {
        const { 
            heroes
        } = this.props;

        return (
            <Grid heroes={ heroes.sorted } />
        )
    }
};


export default connect( mapStateToProps, { fetchHeroes, toggleGrid } )( App );