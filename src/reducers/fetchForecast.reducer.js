import {
  FETCH_FORECAST_FAIL,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_BEGIN
} from "../actions/fetchForecast.actions";

let initialState = {
  isLoading: false,
  city: [],
  list: [],
  search: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_BEGIN:
      return { ...state, isLoading: true, search: false };
    case FETCH_FORECAST_SUCCESS:
      return { ...state, ...action.payload, isLoading: false, search: true };
    case FETCH_FORECAST_FAIL:
      return { ...state, isLoading: true, search: false };
    default:
      return state;
  }
};
