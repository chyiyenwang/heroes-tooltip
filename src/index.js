import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card/cardList';


class App extends Component {
    constructor( props ) {
        super( props );

        this.state = { heroes: [] }
    }

    componentDidMount() {
        const url = 'https://hotsapi.net/api/v1/heroes';

        this._asyncRequest = fetch( url )
            .then( response => {                
                this._asyncRequest = null;

                return response.json();
            })
            .then( heroes => {
                const removedDupes = this.removeDuplicateHeroes( heroes );

                this.setState({ heroes: removedDupes })
            });
    }

    componentWillUnmount() {
        if ( this._asyncRequest ) {
            this._asyncRequest = null;
        }
    }

    render() {
        let { heroes } = this.state;

        return (
            <div className='grid'>
                <CardList heroes={ heroes } />
            </div>
        )
    }

    removeDuplicateHeroes( heroes ) {
        const registeredHeroes = {};

        return heroes.filter( hero => {
            if ( !registeredHeroes[ hero.name ] ) {
                registeredHeroes[ hero.name ] = true;
                return hero;
            }
        });
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );