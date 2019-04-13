import {
    NAME
} from '../constants';

const get = state => state[NAME];

export const getSybmbols = state => get(state).symbols;

// export const getHitBtc = state => state.NAME.HitBtc;