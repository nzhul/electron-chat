import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/auth";
import chatReducer from "../reducers/chats";

export default function initStore() {
  const middlewares = [thunkMiddleware];

  const store = configureStore(
    {
      reducer: {
        chats: chatReducer,
        auth: authReducer,
      },
    },
    applyMiddleware(...middlewares)
  );

  return store;
}
