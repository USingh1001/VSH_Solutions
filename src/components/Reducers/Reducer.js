import { SEARCH_WEB_SERIES, DISPLAY_WEB_SERIES } from "../Actions/Action.js";

const initialState = {
  webSeriesList: [],
  initialList: [],
  loading: true
};

export default function webSeriesApp(state = initialState, action) { console.log(action);console.log(state);
  switch (action.type) {
    case DISPLAY_WEB_SERIES:
      return {
        ...state,
        webSeriesList: action.webSeriesList,
        initialList: action.webSeriesList,
        loading: action.loading
      };
    case SEARCH_WEB_SERIES:
      let search = action.search;
      let requiredWebSeries = [...state.initialList]; console.log(state.initialList);
      return { webSeriesList: requiredWebSeries.filter(webSeries =>
        webSeries.name.toLowerCase().startsWith(search.toLowerCase())
       ), initialList: [...state.initialList], loading: false}    
    default:
      return state;
  }
}
