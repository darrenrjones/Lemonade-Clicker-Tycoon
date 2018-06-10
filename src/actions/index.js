import { API_BASE_URL } from '../config'


export const CLICK_MENU = 'CLICK_MENU';
export const clickMenu = () => ({
  type: CLICK_MENU
})
export const CLICK_UPGRADE_MENU = 'CLICK_UPGRADE_MENU';
export const clickUpgradeMenu = () => ({
  type: CLICK_UPGRADE_MENU
})
export const CLICK_MAIN = 'CLICK_MAIN';
export const clickMain = () => ({
  type: CLICK_MAIN
})
export const AUTO_CLICK = 'AUTO_CLICK';
export const autoClick = (multiplier) => ({
  type: AUTO_CLICK,
  multiplier
})

export const TOGGLE_SIGNEDIN_STATE = 'TOGGLE_SIGNEDIN_STATE';
export const toggleSignedinState = () => ({
  type: TOGGLE_SIGNEDIN_STATE
})

export const PURCHASE_AUTO_CLICKER_EMPLOYEE = 'PURCHASE_AUTO_CLICKER_EMPLOYEE';
export const purchaseAutoClickerEmployee = () => ({
  type: PURCHASE_AUTO_CLICKER_EMPLOYEE  
})
export const PURCHASE_AUTO_CLICKER_TRUCK = 'PURCHASE_AUTO_CLICKER_TRUCK';
export const purchaseAutoClickerTruck = () => ({
  type: PURCHASE_AUTO_CLICKER_TRUCK  
})
export const PURCHASE_AUTO_CLICKER_PLANE = 'PURCHASE_AUTO_CLICKER_PLANE';
export const purchaseAutoClickerPlane = () => ({
  type: PURCHASE_AUTO_CLICKER_PLANE  
})

export const PURCHASE_UPGRADE_ORGANIC = 'PURCHASE_UPGRADE_ORGANIC';
export const purchaseUpgradeOrganic = () => ({
  type: PURCHASE_UPGRADE_ORGANIC  
})
export const PURCHASE_UPGRADE_DOWNTOWN = 'PURCHASE_UPGRADE_DOWNTOWN';
export const purchaseUpgradeDowntown = () => ({
  type: PURCHASE_UPGRADE_DOWNTOWN  
})
export const PURCHASE_UPGRADE_NEWYORK = 'PURCHASE_UPGRADE_NEWYORK';
export const purchaseUpgradeNewYork = () => ({
  type: PURCHASE_UPGRADE_NEWYORK  
})


export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST  
})
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user
})
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  error
})
export const TOGGLE_MODAL_VISIBLE = 'TOGGLE_MODAL_VISIBLE';
export const toggleModalVisible = () => ({
  type: TOGGLE_MODAL_VISIBLE  
})
export const TOGGLE_LOGIN_FORM_VISIBLE = 'TOGGLE_LOGIN_FORM_VISIBLE';
export const toggleLoginFormVisible = () => ({
  type: TOGGLE_LOGIN_FORM_VISIBLE  
})
export const SAVE_SUCCESS_DISPLAY = 'SAVE_SUCCESS_DISPLAY';
export const saveSuccessDisplay = (success) => ({
  type: SAVE_SUCCESS_DISPLAY,
  success  
})

export const fetchSave = () => (dispatch, getState) => {
  const currentState = getState();
  return fetch(`${API_BASE_URL}/api/users/${currentState.mainReducer.id}`,{
    method: 'PUT',
    body: JSON.stringify({
      currentCash: currentState.mainReducer.currentCash,
      careerCash: currentState.mainReducer.careerCash,
      manualClicks: currentState.mainReducer.manualClicks,
      clickValue: currentState.mainReducer.clickValue,
      assets: currentState.mainReducer.assets,
      upgrades: currentState.mainReducer.upgrades,
      seenMessage: currentState.mainReducer.seenMessage
    }),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => {    
    if (!res.ok) {
      if (res.headers.has('content-type') && res.headers
        .get('content-type')
        .startsWith('application/json')
      ){        
        return res.json().then(err => Promise.reject(err));
      }      
      return Promise.reject({
        code: res.status,
        message: res.statusText
        });
    }
    dispatch(saveSuccessDisplay(true));
  })
  .catch(err => {
    dispatch(saveSuccessDisplay(false));
    // setTimeout(() => dispatch(saveSuccessDisplay(null)), 2500);
    
    dispatch(fetchUserError(err))
  }) 
  
}

export const fetchSubmitLogin = (credentials) => (dispatch, getState) => {
  dispatch(fetchUserRequest())
  return fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password
      }),
      headers: {'Content-Type': 'application/json'}
  })   
  .then(res => {
    if (!res.ok) {
      if (res.headers.has('content-type') && res.headers
        .get('content-type')
        .startsWith('application/json')
      ){
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
        });
    }
    return;
  })
  .then(() => fetch(`${API_BASE_URL}/api/users/${credentials.username}`)
  .then(res => res.json()) 
  .then(user => {
    dispatch(fetchUserSuccess(user))
  }))
  .then(() => dispatch(toggleSignedinState()))
  .catch(err => {
    dispatch(fetchUserError(err))
  }) 

}

export const fetchSubmitRegister = (credentials) => (dispatch, getState) => {
    dispatch(fetchUserRequest())

    const currentState = getState();

    return fetch(`${API_BASE_URL}/api/users/register`,{
      method: 'POST',
      body: JSON.stringify({        
        username: credentials.username,
        password: credentials.password,
        currentCash: currentState.mainReducer.currentCash,
        careerCash: currentState.mainReducer.careerCash,
        manualClicks: currentState.mainReducer.manualClicks,
        clickValue: currentState.mainReducer.clickValue,
        assets: currentState.mainReducer.assets,
        upgrades: currentState.mainReducer.upgrades,
        seenMessage: currentState.mainReducer.seenMessage

      }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(user => {
      if(user.error){
        throw user
      }      
      return dispatch(fetchUserSuccess(user))
    })
    .then(() => dispatch(toggleSignedinState()))   
    .catch(err => {
      dispatch(fetchUserError(err))
  }); 

}