/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthService, { CreateUserProps, LoginProps } from '../../Services/authService';
import { UserActionTypes } from '../reducers/userReducer/types';

export const LoginUser = (params: LoginProps, history: any) => async (dispatch: any) => {
  try {
    const res = await AuthService.loginUser(params);
    history.push('/chat');
    return dispatch({
      type: UserActionTypes.LOGIN_USER_SUCCESS,
      payload: res
    });

  } catch (error) {
    return dispatch({
      type: UserActionTypes.LOGIN_USER_FAIL,
      payload: error
    });
  }
};


export const registerUser = (params: CreateUserProps, history: any) => async (dispatch: any) => {
  try {
    const res = await AuthService.createUser(params);
    history.push('/login');
    return dispatch({
      type: UserActionTypes.REGISTER_USER_SUCCESS,
      payload: res
    });

  } catch (error) {
    return dispatch({
      type: UserActionTypes.REGISTER_USER_FAIL,
      payload: error
    });
  }
};