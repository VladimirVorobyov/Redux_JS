import { combineReducers } from "redux";
import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

function counterReducer(state = 0, action){
  if(action.type === INCREMENT){
    return state + 1;
  } else if(action.type === DECREMENT){
    return state - 1;
  } else if(action.type === ASYNC_INCREMENT){
    return state + 1;
  }
  return state;
} 

const initThemeState = {
  value: 'light'
}

function themeReducer(state = initThemeState, action) {
  switch(action.type){
    case CHANGE_THEME:
      return {...state, value: action.payload}
    default: return state;
  }
}

export  const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})