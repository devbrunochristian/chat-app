import { UserStateInterface, UserAction, UserActionTypes } from './types';


const INITIAL_STATE: UserStateInterface = {
  user: {},
  token: null,
  isLogged: false
};

const userReducer = (state = INITIAL_STATE, action:UserAction) => {

  switch (action.type) {

    case UserActionTypes.LOGIN_USER_SUCCESS:

      return {
        user: action.payload,
        isLogged: true,
        token: action.payload.token
      };

    case UserActionTypes.LOGIN_USER_FAIL:

      return {
        ...state
      };


    case UserActionTypes.LOGOUT_USER:

      return {
        user: {},
        token: null,
        isLogged: false

      };


    case UserActionTypes.REGISTER_USER_SUCCESS:

      return {
        ...state

      };


    case UserActionTypes.REGISTER_USER_FAIL:

      return {
        ...state
  
      };

    default: return state;

  }

};

export default userReducer;