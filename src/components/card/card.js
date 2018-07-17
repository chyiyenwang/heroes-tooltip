// @flow

import './card.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerActiveHero, toggleGrid } from '../../actions/index';

import Popover from 'react-tiny-popover';
import Bubble from '../bubble/bubble';

import type { HeroType } from '../../types';


type Props = {
    isClickable       : boolean,
    type              : 'hero' | 'activeHero' | 'ability',
    hero              : HeroType,
    toggleGrid        : Function,
    registerActiveHero: Function
};

type State = {
    isPopoverOpen: boolean
}


class Card extends Component<Props, State> {
    constructor( props ) {
        super( props );

        this.state = {
            isPopoverOpen: false
        };
    }

    render() {
        return (
            <div className='card'>
                <div className="card-inset">
                    { this.renderImage() }
                </div>
            </div>
        )
    }

    renderImage() {
        let { isPopoverOpen } = this.state;
        const { hero, type, abilityNum } = this.props;
        
        if ( type === 'ability' ) {
            return (
                <Popover
                    isOpen={ isPopoverOpen }
                    position={'top'} // preferred position
                    padding={ 40 }
                    content={(
                        <Bubble
                            ability={ hero.abilities[ abilityNum ] }/>
                    )}
                >
                    <div
                        className='image'
                        onMouseEnter={() => this.setState({ isPopoverOpen: true })}
                        onMouseLeave={ () => this.setState({ isPopoverOpen: false })} 
                        // onClick={ () => this.setState({ isPopoverOpen: !this.state.isPopoverOpen })}
                    />
                </Popover>
            )
        }


        return (
            <img 
                className='image image-clickable' 
                src={ hero.icon_url ? hero.icon_url[ '92x93' ] : '' } 
                onClick={ () => {
                    this.handleClick();
                }}
            />
        )
    }

    handleClick() {
        const { 
            isClickable, 
            type, 
            hero,
            toggleGrid,
            registerActiveHero
        } = this.props;

        if ( type === 'activeHero' && isClickable ) {
            toggleGrid();
        }
        else if ( isClickable ) {
            registerActiveHero( hero );
            toggleGrid();
        }
    }
}


export default connect( null, { registerActiveHero, toggleGrid } )( Card );