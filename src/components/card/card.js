// @flow

import './card.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerActiveHero, toggleGrid } from '../../actions/index';


type Props = {
    type : 'hero' | 'activeHero' | 'talent',
    image: string
};

type State = {
    activeHero: ?string
};




class Card extends Component<Props, State> {
    render() {
        // let { activeHero } = this.state;
        const { hero } = this.props;

        return (
            <div className='card'>
                <div className="card-inset">
                    <img 
                        className='image' 
                        src={ hero.icon_url[ '92x93' ] } 
                        onClick={ () => {
                            this.handleClick();
                        }}
                    />
                </div>
            </div>
        )
    }

    handleClick() {
        const { 
            isClickable, 
            type, 
            hero 
        } = this.props;

        if ( type === 'activeHero' && isClickable ) {
            this.props.toggleGrid();
        }
        else if ( isClickable ) {
            this.props.registerActiveHero( hero );
            this.props.toggleGrid();
        }
    }
}

export default connect( null, { registerActiveHero, toggleGrid } )( Card );