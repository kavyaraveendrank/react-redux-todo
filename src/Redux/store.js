import {configureStore,combineReducers} from "@reduxjs/toolkit"
import todoReducer, { reducer } from "./Slice/todoSlice"

const reducers = combineReducers({
    todoReducer: reducer,
  });
  const store = configureStore({
    reducer: reducers,
  });
  export default store;
