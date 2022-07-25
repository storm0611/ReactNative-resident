import { DeprecatedAccessibilityRoles } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewAccessibility";
import auth from "../../api/auth";
import {
  REGISTER_FAIL_MESSAGE,
  REGISTER_SUCCESS_MESSAGE,
} from "../../utils/message";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_MESSAGE,
  UPDATE_LOADER,
} from "../types";

export const register = (payload) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LOADER, payload: true });
    const { data } = await auth.register(payload);
    if (data.success) {
      dispatch({ type: REGISTER_SUCCESS });
      dispatch({ type: SET_MESSAGE, payload: REGISTER_SUCCESS_MESSAGE });
    } else {
      dispatch({ type: REGISTER_FAIL });
      console.log(data.message);
      if (data.message == "This email alreay used!")
        dispatch({
          type: SET_MESSAGE,
          payload: "¡Este correo electrónico ya ha sido utilizado!",
        });
      else dispatch({ type: SET_MESSAGE, payload: REGISTER_FAIL_MESSAGE });
    }
    dispatch({ type: UPDATE_LOADER, payload: false });
  } catch (err) {
    console.log({ err });
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LOADER, payload: true });
    const { data } = await auth.login(payload);
    if (data.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } else {
      dispatch({ type: LOGIN_FAIL });
      dispatch({ type: SET_MESSAGE, payload: data.message });
    }
    dispatch({ type: UPDATE_LOADER, payload: false });
  } catch (err) {
    console.log({ err });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LOADER, payload: true });
    const { data } = await auth.logout();
    dispatch({ type: LOGOUT });
    dispatch({ type: UPDATE_LOADER, payload: false });
  } catch (err) {
    console.log({ err });
  }
};
