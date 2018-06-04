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
} from '../actions'

const initialState = {
  username: '',
  id: '',
  currentCash: 99,
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
  modalMessage: 'Welcome to Lemonade Clicker Tycoon! Click on the green screen to sell lemonade and watch your profits soar!',
  messages: {
    5:'It looks like you could use some help selling all that sweet sweet lemonade. Click the \'MENU\' button and hire an employee!',
    100: 'The demand for your lemonade has grown throughout the city! We better start delivering to local stores! Click the \'MENU\' and purchase a delivery truck!',
    1000: 'Someone made a MEME about your lemonade and now it\'s now a global phenomenon! Go buy a plane to send crates of lemonade to the world!'
  },
  seenMessage: 0,
}

const messageChecker = (state) => {
  if(state.seenMessage < 5 && state.currentCash >= 5 && state.assets.employees === 0){
    return {
      modalVisible: true,
      modalMessage: state.messages[5],
      seenMessage: 5    
    }
  } else if (state.seenMessage < 100 && state.currentCash >= 100 && state.assets.trucks === 0){
      return {         
        modalVisible: true,
        modalMessage: state.messages[100],
        seenMessage: 100   
       }
  } else if (state.seenMessage < 1000 && state.currentCash >= 1000 && state.assets.planes === 0){
      return {         
        modalVisible: true,
        modalMessage: state.messages[1000],
        seenMessage: 1000   
     }
  }   
  return {};
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
    return {
      ...state,
      currentCash: state.currentCash + state.clickValue*action.multiplier,
      careerCash: state.careerCash + state.clickValue*action.multiplier, 
      ...messageChecker(state)     
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
    let newCost = 100**newCount
    return {
      ...state,
      assets: {...state.assets, trucks: newCount},    
      currentCash: state.currentCash - newCost       
    }
  }
  if(action.type === PURCHASE_AUTO_CLICKER_PLANE){
    let newCount = state.assets.planes + 1
    let newCost = 1000**newCount
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
    return {
      ...state,
      loading: false,
      error: null,
      currentUser: action.user, 
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

  
  return state;
}