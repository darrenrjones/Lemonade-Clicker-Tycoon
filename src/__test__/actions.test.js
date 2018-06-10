import {
  CLICK_MENU, 
  clickMenu, 
  clickUpgradeMenu, 
  CLICK_UPGRADE_MENU, 
  clickMain,
  CLICK_MAIN,
  autoClick,
  AUTO_CLICK,
  fetchSave,
  fetchSubmitLogin,
  fetchUserSuccess
} from '../actions'

import { API_BASE_URL } from '../config'


describe('clickMenu', function() {

  it('Should return the action', () => {
    const action = clickMenu();
    expect(action).toEqual({
      type: CLICK_MENU
    })
  });
});

describe('clickUpgradeMenu', function() {

  it('Should return the action', () => {
    const action = clickUpgradeMenu();
    expect(action).toEqual({
      type: CLICK_UPGRADE_MENU
    })
  });
});

describe('clickMain', function() {

  it('Should return the action', () => {
    const action = clickMain();
    expect(action).toEqual({
      type: CLICK_MAIN
    })
  });
}); 

describe('autoclick', function() {

  it('Should return the action', () => {
    const action = autoClick();
    expect(action).toEqual({
      type: AUTO_CLICK
    })
  });
});

// describe('fetchSave', function() {
//   it('should dispatch fetchSave', function(){
//     const user = {      
//         currentCash: 0,
//         careerCash: 10,
//         manualClicks: 10,
//         clickValue: 1,
//         assets: {
//           employees: 0,
//           trucks: 0,
//           planes: 0
//         },
//         upgrades: {
//           organic: false,
//           downtown: false,
//           newyork: false
//         },
//         seenMessage: 0      
//     }
    
//     global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return user;
//                 }
//             })
//         );

//     const dispatch = jest.fn();
//     return fetchSave()(dispatch).then(()= > {
//       expect(fetch)
//     });  

//   });
// });


// describe('fetchSubmitLogin', () => {
//   it('Should dispatch fetchUserSuccess', () => {

//     const credentials = {
//       username: 'bobuser',
//       password: 'password'
//     }

//       global.fetch = jest.fn().mockImplementation(() =>
//           Promise.resolve({
//               ok: true,
//               json() {
//                   return credentials;
//               }
//           })
//       );

//       const dispatch = jest.fn();
//       return fetchSubmitLogin()(dispatch).then(() => {
//           expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/auth/login`);
//           expect(dispatch).toHaveBeenCalledWith(fetchUserSuccess(credentials));
//       });
//   });
// });


  
  

