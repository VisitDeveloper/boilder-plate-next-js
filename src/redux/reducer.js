import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import session from "redux-persist/lib/storage/session"; // defaults to localStorage for web
import storage from "redux-persist/lib/storage";
import  TokenReducer  from "./token/reducer";
import  UserReducer from './user/reducer'

// WHITELIST
const persistConfig = {
  key: "root",
  //   storage: session,
  storage,
  whitelist: ["user","token"], // only card will be persisted,,
  // blackliste:["token"]
};

const rootReducer = combineReducers({
  token: TokenReducer,
  user : UserReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;