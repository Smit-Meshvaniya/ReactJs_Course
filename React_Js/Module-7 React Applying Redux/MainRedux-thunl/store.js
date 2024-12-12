import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import Reducer from "./Reducer"

const rootReducer = combineReducers({
  postsstate: Reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
