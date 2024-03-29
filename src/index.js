import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import "./styles.css";
import webSeriesApp from "./components/Reducers/Reducer";
import { loadWebSeries } from "./components/Actions/Action";
import rootSaga from "./components/Sagas/Saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(webSeriesApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadWebSeries());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
