import { all, call, put, takeEvery } from "redux-saga/effects";
import { LOAD_WEB_SERIES, DISPLAY_WEB_SERIES } from "../Actions/Action";

export function* fetchWebSeriesList() {
  const endpoint = "https://api.myjson.com/bins/j23xw";
  const response = yield call(fetch, endpoint);
  const res = yield response.json(); 
  yield put({ type: DISPLAY_WEB_SERIES, webSeriesList: res.data, loading: false });
}

export function *loadWebSeriesList(){
  yield takeEvery(LOAD_WEB_SERIES, fetchWebSeriesList);
}

export default function* rootSaga() {
  yield all([loadWebSeriesList()]);
}
