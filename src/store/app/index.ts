import { combineReducers } from "@reduxjs/toolkit";
import alert from "./alert";

const createReducer = combineReducers({
  /** Add extra reducers */
  alert,
});

export default createReducer;
