// @flow

import React from 'react';
import Card from './card';

import type { HeroType } from '../../types';


type Props = {
    isClickable?: boolean,
    heroes      : Array<HeroType>
};


const HeroCardList = ( props: Props ) => {
    const { isClickable, heroes } = props;

    if ( heroes.length > 0 ) {
        const cards: Array<Object> = heroes.map( ( hero: HeroType, idx: number ) => {
            return (
                <Card
                    key={ idx }
                    isClickable
                    type='hero'
                    hero={ hero } />
            );
        });

        return cards;
    };
};

export default HeroCardList;