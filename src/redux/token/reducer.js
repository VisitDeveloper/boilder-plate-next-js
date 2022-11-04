// import { REDUX_TYPE } from "types/redux-type";

// export const TokenReducer = (state , action) => {
//   switch (action.type) {
//     case REDUX_TYPE.TOKEN:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     case REDUX_ACTION.EMPTY_TOKEN:
//       return action.payload;
//     default:
//       return state;
//   }
// };

import { REDUX_TYPE } from "types/redux-type";

const initialState = {
  token : null
};

const TokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_TYPE.TOKEN:
      return {
        ...state,
        token : action.payload
      };
    case REDUX_TYPE.EMPTY_TOKEN:
      return {
        token : action.payload
      };
    default:
      return state;
  }
};

export default TokenReducer;
