import { GET_API } from "../actions/api.actions";

const api = "0b62cd0fa6e7ff2dc7f77011677bf785";

let initialState = {
  api
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
