import { combineReducers } from "@reduxjs/toolkit";
import app from "./app";

interface AsyncReducersProps {
  [key: string]: any;
}

export const rootReducer = {
  app,
};

const createReducer = (asyncReducers?: AsyncReducersProps) =>
  combineReducers({
    /** Add extra reducers */
    ...asyncReducers,
    ...rootReducer,
  });

export default createReducer;
