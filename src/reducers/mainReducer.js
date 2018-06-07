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
  TOGGLE_LOGIN_FORM_VISIBLE,
  PURCHASE_UPGRADE_ORGANIC,
  PURCHASE_UPGRADE_DOWNTOWN,
  PURCHASE_UPGRADE_NEWYORK, 
  CLICK_UPGRADE_MENU
} from '../actions'

const initialState = {
  username: '',
  id: '',
  currentCash: 147889,
  careerCash: 0,
  manualClicks: 0,
  menuState: false,
  upgradeView: false,
  clickValue: 1,
  signedIn: false, 
  assets: {
    employees: 0,
    trucks: 0,
    planes: 0
  },
  upgrades: {
    organic: false,
    downtown: false,
    newyork: false
  },
  loading: false,
  error: null,
  currentUser: null,
  modalVisible: true,
  loginFormVisible: false,
  modalMessage: 'Welcome to Lemonade Clicker Tycoon! Click on the orange screen to sell lemonade and watch your profits soar!',
  messages: {
    10:'It looks like you could use some help selling all that sweet sweet lemonade. Click the \'MENU\' button and hire an employee!',
    100: 'The demand for your lemonade has grown throughout the city! You should deliver to local stores. Open the \'MENU\' and purchase a delivery truck!',
    1000: 'Someone made a MEME about your lemonade and now it\'s a global phenomenon! Buy a plane to meet the global demand!'
  },
  seenMessage: 0,
}

const messageChecker = (state) => {
  if(state.seenMessage < 10 && state.currentCash >= 10 && state.assets.employees === 0){
    return {
      modalVisible: true,
      modalMessage: state.messages[10],
      seenMessage: 10    
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
  if(action.type === CLICK_UPGRADE_MENU){
    return {
      ...state,
      upgradeView: !state.upgradeView
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
    let newCost = 10**newCount
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
  if(action.type === PURCHASE_UPGRADE_ORGANIC){
    return {
      ...state,
      clickValue: state.clickValue + 1,
      upgrades: {...state.upgrades, organic : true},
      currentCash: state.currentCash - 500
    }
  }
  if(action.type === PURCHASE_UPGRADE_DOWNTOWN){
    return {
      ...state,
      clickValue: state.clickValue + 1,
      upgrades: {...state.upgrades, downtown : true},
      currentCash: state.currentCash - 5000
    }
  }
  if(action.type === PURCHASE_UPGRADE_NEWYORK){
    return {
      ...state,
      clickValue: state.clickValue + 2,
      upgrades: {...state.upgrades, newyork : true},
      currentCash: state.currentCash - 50000
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
  if(action.type === TOGGLE_LOGIN_FORM_VISIBLE){
    return {
      ...state,
      loginFormVisible: !state.loginFormVisible    
    }
  }
  
  return state;
}