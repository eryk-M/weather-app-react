export const FETCH_FORECAST_BEGIN = "FETCH_FORECAST_BEGIN";
export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_FORECAST_FAIL = "FETCH_FORECAST_FAIL";

export const getForecast = (api, query, lat, long) => {
  return dispatch => {
    dispatch({ type: FETCH_FORECAST_BEGIN });
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&lat=${lat}&lon=${long}&appid=${api}&units=metric`
    )
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: FETCH_FORECAST_FAIL,
            payload: res.statusText
          });
        }
      })
      .then(res => res.json())
      .then(forecast => {
        dispatch({
          type: FETCH_FORECAST_SUCCESS,
          payload: forecast
        });
      })
      .catch(err => console.log(err));
  };
};
