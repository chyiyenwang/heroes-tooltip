// @flow

import React from 'react';
import Card from './card';
import Ultimate from './ultimate';

import type { HeroType, AbilityType } from '../../types';


type Props = {
    hero: HeroType,
    type: 'primary' | 'secondary',
    data: Array<Object>
};


const AbilityCardList = ( props: Props ) => {
    const { hero, type, data } = props;

    if ( hero && type === 'primary' ) {
        const abilityCards = [];

        // 0 = q
        // 1 = w
        // 2 = e
        // 3 = r1
        // 4 = r2
        // 5 = d
        data.forEach( ( ability, idx ) => {
            let heroTrait;

            // limit the number of times we push an ability since the primary ability bar only has 5 items
            if ( idx < 5 ) {
                if ( idx === 3 ) {
                    const ultimates = [ data[ 3 ], data[ 4 ] ];

                    abilityCards.push( 
                        <Ultimate 
                            key={ idx }
                            hero={ hero }
                            data={ ultimates }
                        /> 
                    );
                }
                else {
                    // need to set the heroTrait since there are 2 ultimate abilities to choose from
                    if ( idx === 4 ) heroTrait = data[ 5 ];
    
                    abilityCards.push(
                        <Card
                            key={ idx }
                            ability={ heroTrait || ability }
                            type='ability'
                            hero={ hero }
                        />
                    )
                }
            }
        });

        return abilityCards;
    };
};

export default AbilityCardList;