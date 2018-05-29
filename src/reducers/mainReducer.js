import { 
  CLICK_MENU,
  CLICK_MAIN,
  AUTO_CLICK,
  PURCHASE_AUTO_CLICKER_EMPLOYEE,
  PURCHASE_AUTO_CLICKER_TRUCK,
  PURCHASE_AUTO_CLICKER_PLANE,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from '../actions'

const initialState = {
  userName: '',
  userId: '',
  userEmail: '',
  currentCash: 40466,
  careerCash: 0,
  manualClicks:0,
  menuState: false,
  clickValue: 1,
  signedIn: false, 
  employees: 
    {
      name: 'Employees',
      count: 0,
      currentCost: 25,
      employeeSpeed: 1000
    },
  trucks: 
    {
      name: 'Trucks',
      count: 0,
      currentCost: 5000 ,
      employeeSpeed: 5000
    },
  planes:
    {
      name: 'Planes',
      count: 0,
      currentCost: 1000000,
      employeeSpeed: 10000
    },
  loading: false,
  error: null,
  currentUser: [],  
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
    console.log('auto_click');
    
    return {
      ...state,
      currentCash: state.currentCash + state.clickValue*action.multiplier,
      careerCash: state.careerCash + state.clickValue*action.multiplier,      
    }
  }
  if(action.type === PURCHASE_AUTO_CLICKER_EMPLOYEE){
    let count = state.employees.count
    let currentCost = state.employees.currentCost
    return {
      ...state,
      employees: {
        name: 'Employees',
        count: count + 1,
        currentCost: currentCost * 5,
        employeeSpeed: 1000
      },
      currentCash: state.currentCash - currentCost      
    }
  }
  if(action.type === PURCHASE_AUTO_CLICKER_TRUCK){
    let count = state.trucks.count
    let currentCost = state.trucks.currentCost
    return {
      ...state,
      trucks: {
        name: 'Trucks',
        count: count + 1,
        currentCost: currentCost * 5,
        employeeSpeed: 5000
      },
      currentCash: state.currentCash - currentCost      
    }
  }
  if(action.type === PURCHASE_AUTO_CLICKER_PLANE){
    let count = state.planes.count
    let currentCost = state.planes.currentCost
    return {
      ...state,
      planes: {
        name: 'Planes',
        count: count + 1,
        currentCost: currentCost * 10,
        employeeSpeed: 5000
      },
      currentCash: state.currentCash - currentCost      
    }
  }
  if(action.type === FETCH_USER_REQUEST){
    return {
      ...state,
      loading: true     
    }
  }
  if(action.type === FETCH_USER_SUCCESS){
    return {
      ...state,
      loading: false,
      error: null,
      currentUser: action.user     
    }
  }
  if(action.type === FETCH_USER_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error.message      
    }
  }
  
  return state;
}