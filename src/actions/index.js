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
export const fetchUserRequest = (user) => ({
  type: FETCH_USER_REQUEST,
  user
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

export const fetchSubmitLogin = (credentials) => (dispatch, getState) => {

  // console.log(getState());

    const currentState = getState();
    console.log(currentState.mainReducer.currentCash);
    console.log(credentials.userName);
    


    fetch(`${API_BASE_URL}/api/users`,{
      method: 'POST',
      body: JSON.stringify({        
        userName: credentials.userName,
        password: credentials.password,
        currentCash: currentState.mainReducer.currentCash
      }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(user => dispatch(fetchUser()))
    .catch(err => console.log(err)  )
  
}

export const fetchUser = () => {

  return dispatch => {

    dispatch(fetchUserRequest());  

    fetch(`${API_BASE_URL}/api/users`)
    .then(res => res.json())
    .then(user => dispatch(fetchUserSuccess(user)))
    .catch(err => dispatch(fetchUserError(err)))    
  }  
}
