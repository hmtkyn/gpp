import React, { createContext, useReducer } from 'react';

/**
 * Create STATE
 */
const initialState = {
  user: {
    name: "",
    country: "",
    totalTime: ""
  }
};

/**
 * Create CONTEXT
 */
export const UsersContext = createContext(initialState);

/**
 * Create ACTIONS
 */
const ACTIONS = {
  SET_USER: 'set_user'
}

/**
 * Create REDUCER
 */
export const UserReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

/**
 * Create PROVIDER 
 */
export const UsersProvider = ({ children }) => {

  const [state, dispatch] = useReducer(UserReducer, initialState);

  function setUser(user) {
    dispatch({
      type: ACTIONS.SET_USER,
      payload: user
    })
  }

  const value = { user: state.user, setUser };

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}