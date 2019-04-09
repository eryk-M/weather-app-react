import {
  FETCH_FORECAST_FAIL,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_BEGIN
} from "../actions/fetchForecast.actions";

let initialState = {
  isLoading: false,
  city: [],
  list: [],
  search: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_BEGIN:
      return { ...state, isLoading: true, search: false, error: false };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        search: true,
        error: false
      };
    case FETCH_FORECAST_FAIL:
      return { ...state, isLoading: false, search: false, error: true };
    default:
      return state;
  }
};
