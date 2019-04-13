import * as actionTypes from '../actions';


const initialState = {
    symbols: [],
};

export const setSymbolsList = (state = initialState.symbols, action) => {
    return { ...state, symbols: action.payload }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SYMBOLS_LIST:
            return setSymbolsList(state, action);
        default: return state;
    }
};

export default reducer;