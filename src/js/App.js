import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Home from "./views/Home";

import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Settings from "./views/Settings";
import Welcome from "./views/Welcome";
import Chat from "./views/Chat";

import initStore from "./store";
import { listenToAuthChanges } from "./actions/auth";

const store = initStore();

const App = () => {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
