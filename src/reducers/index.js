import weather from "../reducers/fetchWeather.reducer";
import api from "../reducers/api.reducer";
import forecast from "../reducers/fetchForecast.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  api,
  weather,
  forecast
});

export default rootReducer;
