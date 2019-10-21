export const LOAD_WEB_SERIES = "LOAD_WEB_SERIES";
export const SEARCH_WEB_SERIES = "SEARCH_WEB_SERIES";
export const DISPLAY_WEB_SERIES = "DISPLAY_WEB_SERIES";

export function loadWebSeries() {
  return {
    type: LOAD_WEB_SERIES
  };
}

export function searchWebSeries(search) {
  return {
    type: SEARCH_WEB_SERIES,
    search   
  }
}