// @flow

import './card.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerActiveHero, toggleGrid } from '../../actions/index';

import Card from './card';

import type { HeroType } from '../../types';


type Props = {
    hero: HeroType,
    data: Array<Object>
};

type State = {
    isUltSelectionOpen: boolean
}


class Ultimate extends Component<Props, State> {
    constructor( props ) {
        super( props );

        this.state = {
            isUltSelectionOpen: false,
            selectedUlt: null
        };ß
    }

    render() {
        let { isUltSelectionOpen } = this.state;

        return (
            <div className='HTT__card-ult-container'>
                <div className="selectable-ults">
                    { this.renderUltimates() }
                </div>
                <div className='HTT__card HTT__card-ult-selector'>
                    <div className="HTT__card-inset">
                        <div 
                            className="HTT__image HTT__image-ult"
                            onClick={ () => {
                                this.setState({ isUltSelectionOpen: !isUltSelectionOpen });
                            }
                        }>
                            R
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderUltimates() {
        const { isUltSelectionOpen } = this.state;
        const { hero, data } = this.props;

        if ( isUltSelectionOpen ) {
            return data.map( ( ult, idx ) => {
                return (
                    <Card
                        key={ idx }
                        ability={ ult }
                        type='ult'
                        hero={ hero }
                    />
                )
            })
        }
    }
}


export default connect( null, { registerActiveHero, toggleGrid } )( Ultimate );