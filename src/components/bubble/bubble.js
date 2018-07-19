// @flow

import './bubble.scss';
import React from 'react';

import type { AbilityType } from '../../types.js';


type Props = {
    ability: AbilityType
};


const Bubble = ( { ability }: Props ) => {

    return (
        <div className='HTT__bubble'>
            <h4>{ ability.title }</h4>
            <p>{ ability.description }</p>
            
            <div className='HTT__bubble-triangle-border'/>
            <div className='HTT__bubble-triangle'/>
        </div>
    )
};

export default Bubble;