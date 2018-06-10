import {
  CLICK_MENU, 
  clickMenu, 
  clickUpgradeMenu, 
  CLICK_UPGRADE_MENU, 
  clickMain,
  CLICK_MAIN,
  autoClick,
  AUTO_CLICK
} from '../actions'

describe('clickMenu', function() {

  it('Should return the action', () => {
    const action = clickMenu();
    expect(action).toEqual({
      type: CLICK_MENU
    })
  });
  it('Should return the action', () => {
    const action = clickUpgradeMenu();
    expect(action).toEqual({
      type: CLICK_UPGRADE_MENU
    })
  });
  it('Should return the action', () => {
    const action = clickMain();
    expect(action).toEqual({
      type: CLICK_MAIN
    })
  }); 
  it('Should return the action', () => {
    const action = autoClick();
    expect(action).toEqual({
      type: AUTO_CLICK
    })
  });
  
  


});