import { REDUX_TYPE } from "types/redux-type";

const initialState = {
  user : false
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case REDUX_TYPE.USER:
        return {
          ...state,
          user : action.payload
        };
      case REDUX_TYPE.EMPTY_USER:
        return {
          user : action.payload
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;