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
  TOGGLE_SIGNEDIN_STATE,
  TOGGLE_MODAL_VISIBLE,
  CHANGE_MODAL_MESSAGE,
} from '../actions'

const initialState = {
  username: '',
  id: '',
  currentCash: 0,
  careerCash: 0,
  manualClicks: 0,
  menuState: false,
  clickValue: 1,
  signedIn: false, 
  assets: {
    employees: 0,
    trucks: 0,
    planes: 0
  },
  loading: false,
  error: null,
  currentUser: null,
  modalVisible: true,
  modalMessage: 'Welcome default!'  
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
      manualClicks: state.manualClicks + 1,
    }
  }
  if(action.type === AUTO_CLICK){
    // console.log('auto_click');
    // console.log(state.clickValue*action.multiplier);
    
    return {
      ...state,
      currentCash: state.currentCash + state.clickValue*action.multiplier,
      careerCash: state.careerCash + state.clickValue*action.multiplier,      
    }
  }
  if(action.type === TOGGLE_SIGNEDIN_STATE){
    console.log('signedIn state changed');    
    return {
      ...state,
      signedIn: !state.signedIn
    }
  }

  if(action.type === PURCHASE_AUTO_CLICKER_EMPLOYEE){
    let newCount = state.assets.employees + 1
    let newCost = 5**newCount
    return {
      ...state,
      assets: {...state.assets, employees: newCount},    
      currentCash: state.currentCash - newCost       
    }
  }
  if(action.type === PURCHASE_AUTO_CLICKER_TRUCK){
    let newCount = state.assets.trucks + 1
    let newCost = 10**newCount
    return {
      ...state,
      assets: {...state.assets, trucks: newCount},    
      currentCash: state.currentCash - newCost       
    }
  }
  if(action.type === PURCHASE_AUTO_CLICKER_PLANE){
    let newCount = state.assets.planes + 1
    let newCost = 100**newCount
    return {
      ...state,
      assets: {...state.assets, planes: newCount},    
      currentCash: state.currentCash - newCost       
    }
  }
  
  if(action.type === FETCH_USER_REQUEST){
    return {
      ...state,
      loading: true     
    }
  }
  if(action.type === FETCH_USER_SUCCESS){
    // console.log('ACTION>USER: ',action.user);
    
    return {
      ...state,
      loading: false,
      error: null,
      currentUser: action.user, //
      id: action.user.id,
      username: action.user.username,
      currentCash: action.user.currentCash,
      careerCash: action.user.careerCash,
      manualClicks: action.user.manualClicks,
      clickValue: action.user.clickValue,
      assets: action.user.assets     
    }
  }
  if(action.type === FETCH_USER_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error.message      
    }
  }
  if(action.type === TOGGLE_MODAL_VISIBLE){
    return {
      ...state,
      modalVisible: !state.modalVisible    
    }
  }
  if(action.type === CHANGE_MODAL_MESSAGE){
    return {
      ...state,
      modalMessage: action.message    
    }
  }
  
  return state;
}