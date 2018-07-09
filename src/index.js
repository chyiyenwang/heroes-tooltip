import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid/grid';


class App extends Component {
    constructor( props ) {
        super( props );

        this.state = { 
            selectedHero: null,
            sortedHeroes: []
        };
    }

    componentDidMount() {
        const url = 'https://hotsapi.net/api/v1/heroes';

        this._asyncRequest = fetch( url )
            .then( response => {                
                this._asyncRequest = null;
                
                return response.json();
            })
            .then( heroes => {
                const sortedHeroes =  this.filterHeroes( heroes );

                this.setState({ sortedHeroes });
            });
    }

    componentWillUnmount() {
        if ( this._asyncRequest ) {
            this._asyncRequest = null;
        }
    }

    render() {
        const { sortedHeroes } = this.state;

        return <Grid heroes={ sortedHeroes } />
    }

    filterHeroes( heroes ) {
        const registeredHeroes = {};
        const sortedHeroNames  = [];

        // Check to see if a hero has been registered so we can make sure there are
        // no duplicate heroes. After we register the hero we will push that hero to 
        // their respective row. When both rows are full we'll push them to the state
        // and then reset the row counts.
        heroes.forEach( hero => {
            if ( !registeredHeroes[ hero.name ] ) {
                registeredHeroes[ hero.name ] = hero;
                sortedHeroNames.push( hero.name );
            };
        });

        return sortedHeroNames.sort().map( hero => {
            return registeredHeroes[ hero ]
        });
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );