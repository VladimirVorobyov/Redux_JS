import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

export function increment(){
  return {
    type: INCREMENT
  }
}

export function decrement(){
  return {
    type: DECREMENT
  }
}
export function asyncIncrement(){
  return function(dispatch){
    setTimeout(()=>{
      dispatch({type: ASYNC_INCREMENT})
    },2000)
    
  }
}

export function changeTheme(newTheme){
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  }
}