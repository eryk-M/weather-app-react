import {
  FETCH_WEATHER_FAIL,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_BEGIN
} from "../actions/fetchWeather.actions";

let initialState = {
  isLoading: true,
  weather: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_WEATHER_FAIL:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
