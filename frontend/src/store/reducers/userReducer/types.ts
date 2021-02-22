/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserStateInterface {
  user: any,
  token: string | null,
  isLogged: boolean
}

export enum UserActionTypes { 
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  LOGOUT_USER = 'LOGOUT_USER',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  LOGIN_USER_FAIL = 'LOGIN_USER_FAIL',
  REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'
} 

export interface UserAction {
  type: UserActionTypes,
  payload: any
}


export interface LoginUserSucessPayload {
  type: UserActionTypes.LOGIN_USER_SUCCESS,
  payload: any[]
}

export interface RegisterUserSucessPayload {
  type: UserActionTypes.LOGIN_USER_SUCCESS,
  payload: any[]
}

export interface LoginUserFailPayload {
  type: UserActionTypes.LOGIN_USER_FAIL,
  payload: string
}

export interface RegisterUserFailPayload {
  type: UserActionTypes.LOGIN_USER_FAIL,
  payload: any[]
}  


export interface LogoutUserPayload {
  type: UserActionTypes.LOGOUT_USER,
}  