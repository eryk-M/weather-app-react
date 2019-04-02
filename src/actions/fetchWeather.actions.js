export const FETCH_WEATHER_BEGIN = "FETCH_UPCOMING_BEGIN";
export const FETCH_WEATHER_SUCCESS = "FETCH_UPCOMING_SUCCESS";
export const FETCH_WEATHER_FAIL = "FETCH_UPCOMING_FAIL";

export const getWeather = (api, lat, long) => {
  return dispatch => {
    dispatch({ type: FETCH_WEATHER_BEGIN });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
    )
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          alert(res.statusText);
          dispatch({
            type: FETCH_WEATHER_FAIL,
            payload: res.statusText
          });
        }
      })
      .then(res => res.json())
      .then(weather => {
        dispatch({
          type: FETCH_WEATHER_SUCCESS,
          payload: weather
        });
      })
      .catch(err => console.log(err));
  };
};
