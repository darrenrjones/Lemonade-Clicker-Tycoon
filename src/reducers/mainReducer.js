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
  CLICK_UPGRADE_MENU,
  SAVE_SUCCESS_DISPLAY,
  SET_AUTH_TOKEN,
  AUTH_SUCCESS,
  CLEAR_AUTH,
  AUTH_ERROR
} from '../actions'

const initialState = {
  username: '',
  id: '',
  currentCash: 0,
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
  modalMessage: 'Welcome to Lemonade Clicker Tycoon! Each click on the orange screen will sell a lemonade. Click to watch your profits soar!',
  messages: {
    10:'It looks like you could use some help selling all that sweet sweet lemonade. Click the \'MENU\' button and hire an employee!',
    100: 'The demand for your lemonade has grown throughout the city! You should deliver to local stores. Open the \'MENU\' and purchase a delivery truck!',
    1000: 'Someone made a MEME about your lemonade and now it\'s a global phenomenon! Buy a plane to meet the global demand!',
  },
  clickMessages: {
    100: 'Wow! You have clicked 100 times! You are a lemonade selling machine!',
    200: 'Wow! You have clicked 200 times! You are a lemonade selling beast!',
    500: 'Wow! You have clicked 500 times! What a hard working CEO!',
    1000: '1000 clicks!?!?! Your work ethic is so impressive it\'s scary! Don\'t worry, you won\'t be reminded about your click count again. Carry on you lemonade selling fiend!',
  },
  seenMessage: 0,
  seenClickMessage: 0,
  saveSuccess: null,
  authToken: null,
  user: null
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
const clickMessageChecker = (state) => {
  if(state.seenClickMessage < 100 && state.manualClicks === 100){
    return {
      modalVisible: true,
      modalMessage: state.clickMessages[100],
      seenClickMessage: 100    
    }
  } else if(state.seenClickMessage < 200 && state.manualClicks === 200){
    return {
      modalVisible: true,
      modalMessage: state.clickMessages[200],
      seenClickMessage: 200    
    }
  } else if(state.seenClickMessage < 500 && state.manualClicks === 500){
    return {
      modalVisible: true,
      modalMessage: state.clickMessages[500],
      seenClickMessage: 500    
    }
  } else if(state.seenClickMessage < 1000 && state.manualClicks === 1000){
    return {
      modalVisible: true,
      modalMessage: state.clickMessages[1000],
      seenClickMessage: 1000    
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
      ...messageChecker(state),
      ...clickMessageChecker(state),
    }
  }
  if(action.type === TOGGLE_SIGNEDIN_STATE){
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
      assets: action.user.assets,
      upgrades: action.user.upgrades,
     
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
  if(action.type === SAVE_SUCCESS_DISPLAY){
    return {
      ...state,
      saveSuccess: action.success   
    }
  }
  if(action.type === SET_AUTH_TOKEN){
    return{
      ...state,
      authToken: action.authToken
    }
  }
  if(action.type === AUTH_SUCCESS){
    return {
      ...state,
      loading: false,
      user: action.user
    }
  }
  if(action.type === CLEAR_AUTH){
    return {
      ...state,
      authToken: null,
      user: null
    }
  }
  if(action.type === AUTH_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  
  return state;
}