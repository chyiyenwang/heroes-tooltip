// @flow

import React from 'react';
import Card from './card';

import type { HeroType, AbilityType } from '../../types';


type Props = {
    type        : 'ability',
    hero        : HeroType
};


const AbilityCardList = ( props: Props ) => {
    const { hero, type } = props;

    if ( hero ) {
        const abilityCards = [];

        for ( let abilityNum = 0; abilityNum < 5; abilityNum++ ) {
            abilityCards.push(
                <Card
                    key={ abilityNum }
                    abilityNum={ abilityNum }
                    type='ability'
                    hero={ hero }
                />
            )
        }
        // const abilityCards = hero.abilities.map( ( ability: AbilityType, idx: number ) => {
        //     return (
        //         <Card
        //             key={ idx }
        //             number={ idx }
        //             type='ability'
        //             hero={ hero } />
        //     )
        // })

        return abilityCards;
    };
};

export default AbilityCardList;