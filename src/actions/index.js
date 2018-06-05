import { API_BASE_URL } from '../config'


export const CLICK_MENU = 'CLICK_MENU';
export const clickMenu = () => ({
  type: CLICK_MENU
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
      seenMessage: currentState.mainReducer.seenMessage
    }),
    headers: {'Content-Type': 'application/json'}
  })
}

export const fetchUser = (user) => (dispatch, getState) => {

  // console.log("USER PASSED FROM FETCHSUBMITLOGIN: ", user);
  return fetch(`${API_BASE_URL}/api/users/${user.username}`)
  .then(res => res.json()) 
  .then(user => {
    console.log(user);
    dispatch(fetchUserSuccess(user))
  })   
}

export const fetchSubmitLogin = (credentials) => (dispatch, getState) => {

  return fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password
      }),
      headers: {'Content-Type': 'application/json'}
  })   
  .then(res => {
    console.log('check res.ok: ', res);
    if (!res.ok) {
      if (res.headers.has('content-type') && res.headers
                        .get('content-type')
                        .startsWith('application/json')
      ){
        // It's a nice JSON error returned by us, so decode it
        return res.json().then(err => Promise.reject(err));
      }
      // It's a less informative error returned by express
      console.log('res not caught in !res.ok if statement: ', res);
      return Promise.reject({
        code: res.status,
        message: res.statusText
        });
    }
    return;
  })
  // .then(() => dispatch(fetchUserRequest()))

  .then(() => dispatch(fetchUser(credentials)))
  .then(() => dispatch(toggleSignedinState()))
  .catch(err => {
    console.log('catch in fetchSubmitLogin: ', err);
    dispatch(fetchUserError(err))
  }) 
}

export const fetchSubmitRegister = (credentials) => (dispatch, getState) => {

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
        seenMessage: currentState.mainReducer.seenMessage

      }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(user => {
      console.log('should not be here: ',user);
      if(user.error){
        throw user
      }
      
      return dispatch(fetchUserSuccess(user))
    }) //another fetch for login dispatch fethcSubmitLogin
    .then(() => dispatch(toggleSignedinState()))   
    .catch(err => {
      console.log('ERROR FROM CALL: ', err);      
      dispatch(fetchUserError(err))

  });
  
}