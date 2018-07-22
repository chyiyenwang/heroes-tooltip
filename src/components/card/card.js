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
    abilityNum        : number,
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
        const { hero } = this.props;

        if ( hero.icon_url[ '92x93' ] === 'hidden' ) {
            return <div className='HTT__card HTT__card-hidden' />
        }

        return (
            <div className='HTT__card'>
                <div className="HTT__card-inset">
                    { this.renderImage() }
                </div>
            </div>
        )
    }

    renderImage() {
        let { isPopoverOpen } = this.state;
        const { hero, type, abilityNum } = this.props;
        
        // the Prop 'type' will determine which card image to display
        if ( type === 'ability' ) {
            return (
                <Popover
                    isOpen={ isPopoverOpen }
                    position={ 'top' }
                    padding={ 40 }
                    content={(
                        <Bubble ability={ hero.abilities[ abilityNum ] }/>
                    )}
                >
                    <div
                        className='HTT__image HTT__image-ability'
                        onMouseEnter={() => this.setState({ isPopoverOpen: true })}
                        onMouseLeave={ () => this.setState({ isPopoverOpen: false })} 
                        // onClick={ () => this.setState({ isPopoverOpen: !this.state.isPopoverOpen })}
                    />
                </Popover>
            )
        }

        return (
            <img 
                className={ type === 'activeHero' ? 'HTT__image HTT__image-active-hero' : 'HTT__image HTT__image-clickable' }
                src={ hero.icon_url ? hero.icon_url[ '92x93' ] : '' } 
                onError={ e => {
                    this.handleImageError( e, hero );
                }}
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

    handleImageError( e, hero ) {
        const heroName = hero.name.toLowerCase().replace( ' ', '-' );
        e.target.src=`http://www.heroesfire.com/images/wikibase/icon/heroes/${ heroName }.png`;
    }
}


export default connect( null, { registerActiveHero, toggleGrid } )( Card );