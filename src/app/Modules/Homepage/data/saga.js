import { put } from "redux-saga";
import { delay, takeEvery } from "redux-saga";
import * as actions from "../actions";
import axios from "axios";

export default function* saga() {
  try {
    yield [takeEvery(actions.GET_SYMBOLS_LIST, getSymbolsList)];
  } catch (error) {
    return;
  }
}

export function* getSymbolsList(action) {
  try {
    // const response = yield axios({
    //   method: 'get',
    //   url: 'http://localhost:3030/list'
    // });

    var responseList = {
      symbols: []
    };
    var symbol = {};
    for (var i = 1; i <= 1000; i++) {
      symbol = {};
      symbol.id = i;
      symbol.currency = "Record :::  " + i;
      responseList.symbols.push(symbol);
    }

    const symbolsData = responseList.symbols;
    console.log(symbolsData);
    yield put(actions.setSymbolsList(symbolsData));
  } catch (error) {
    console.log(error);
  }
}
