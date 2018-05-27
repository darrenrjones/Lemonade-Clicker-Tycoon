import { CLICK_MENU, CLICK_MAIN } from '../actions'



const initialState = {
  currentCash: 0,
  menuState: false,
  clickValue: 1,
  
}

export default function mainReducer(state = initialState, action){

  if(action.type === CLICK_MENU){
    return {
      ...state,
      menuState: !state.menuState
    }
  }
  if(action.type === CLICK_MAIN){
    return {
      ...state,
      currentCash: state.currentCash + state.clickValue
    }
  }
  
  return state;
}