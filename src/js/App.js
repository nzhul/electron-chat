import React from "react";
import { Provider } from "react-redux";
import Home from "./views/Home";

import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Settings from "./views/Settings";
import Login from "./views/Login";
import Register from "./views/Register";
import Chat from "./views/Chat";

import initStore from "./store";

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
