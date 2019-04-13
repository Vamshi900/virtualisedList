import {
    NAME,
} from './constants';


export const GET_SYMBOLS_LIST = `${NAME}/GET_SYMBOLS_LIST`;
export const SET_SYMBOLS_LIST = `${NAME}/SET_SYMBOLS_LIST`;

export function getSymbolsList() {
    return {
        type: GET_SYMBOLS_LIST
    };
}

export function setSymbolsList(contributors) {
    return {
        type: SET_SYMBOLS_LIST,
        payload :contributors
    };
}
