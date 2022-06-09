import { userActionTypes } from "./user.type";

const INITALSTATE = {
  currentUser: null,
};

const userReducer = (state = INITALSTATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
