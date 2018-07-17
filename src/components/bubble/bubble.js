// @flow

import './bubble.scss';
import React from 'react';

import type { AbilityType } from '../../types.js';

const Bubble = ({ ability }: AbilityType ) => {

    return (
        <div className='bubble'>
            <h4>{ ability.title }</h4>
            <p>{ ability.description }</p>
            
            <div className='bubble-triangle-border'/>
            <div className='bubble-triangle'/>
        </div>
    )
};

export default Bubble;