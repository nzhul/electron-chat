import * as api from "../api/auth";

export const registerUser = (formData) => (dispatch) => {
  dispatch({ type: "AUTH_REGISTER_INIT" });
  return api.register(formData).then((user) => {
    dispatch({ type: "AUTH_REGISTER_SUCCESS" });
    return user;
  });
};

export const login = (formData) => (dispatch) => {
  dispatch({ type: "AUTH_LOGIN_INIT" });
  return api
    .login(formData)
    .then((_) => dispatch({ type: "AUTH_LOGIN_SUCCESS" }));
};

export const logout = () => (dispatch) =>
  api.logout().then((_) => dispatch({ type: "AUTH_LOGOUT_SUCCESS" }));

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: "AUTH_ON_INIT" });

  api.onAuthStateChanges(async (authUser) => {
    if (authUser) {
      // TODO: getUserProfile method needs a fix.
      // const userProfile = await api.getUserProfile(authUser.uid);
      dispatch({ type: "AUTH_ON_SUCCESS", user: authUser.email });
      console.log("AUTHENTICATED");
    } else {
      dispatch({ type: "AUTH_ON_ERROR" });
      console.log("NOT AUTHENTICATED");
    }
  });
};
