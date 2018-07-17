// @flow


export type HeroType = {
    name        : string,
    short_name  : string,
    attribute_id: string,
    translations: Array<string>,
    role        : string,
    type        : string,
    release_date: string,
    icon_url    : {
        '92x93' : string
    },
    abilities   : Array<AbilityType>,
    talents     : Array<TalentType>
};


export type AbilityType = {
    owner      : string,
    name       : string,
    title      : string,
    description: string,
    icon       : ?string,
    hotkey     : string,
    cooldown   : number,
    mana_cost  : ?number,
    trait      : boolean
};


export type TalentType = {
    name       : string,
    title      : string,
    description: string,
    icon       : string,
    ability    : string,
    sort       : number,
    cooldown   : ?number,
    mana_cost  : ?number,
    level      : number
};