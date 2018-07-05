import './card.scss';
import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        let { image } = this.props;

        return (
            <div className="card">
                <div className="card-inset">
                    <img className='image' src={ image } />
                </div>
            </div>
        )
    }
}