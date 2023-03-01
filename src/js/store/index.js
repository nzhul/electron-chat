import { configureStore } from "@reduxjs/toolkit";

export default function initStore() {
  const store = configureStore({
    reducer: (state) => {
      return {
        message: "Hello World",
        data1: "just some testing data",
        data2: "just some testing data 2",
      };
    },
  });

  return store;
}
