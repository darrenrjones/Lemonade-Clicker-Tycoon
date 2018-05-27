import { CLICK_MENU, CLICK_MAIN, AUTO_CLICK } from '../actions'



const initialState = {
  currentCash: 5500000000,
  careerCash: 0,
  manualClicks:0,
  menuState: false,
  clickValue: 2,
  signedIn: false,
  employees: 
  {
    count: 0,
    currentCost: 100,
    employeeSpeed: 3000
  },
  trucks: {
    count: 0,
    currentCost: 1000 ,
    employeeSpeed: 10000
  },
  planes:{
    count: 0,
    currentCost: 100000,
    employeeSpeed: 60000
  }
  
  
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
      currentCash: state.currentCash + state.clickValue,
      careerCash: state.careerCash + state.clickValue,
      manualClicks: state.manualClicks + 1
    }
  }
  if(action.type === AUTO_CLICK){
    return {
      ...state,
      currentCash: state.currentCash + state.clickValue,
      careerCash: state.careerCash + state.clickValue,      
    }
  }
  
  return state;
}