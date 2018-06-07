import mainReducer from '../reducers/mainReducer';
import { clickMenu, clickUpgradeMenu, clickMain } from '../actions';

describe('mainReducer', function(){

  it('should switch menuState', function() {
    const state = {
      menuState: false
    };
    const action = clickMenu();
    const newState = mainReducer(state,action);

    expect(newState.menuState).toEqual(!state.menuState);
  });

  it('should switch upgradeView', function() {
    const state = {
      upgradeView: false
    };
    const action = clickUpgradeMenu();
    const newState = mainReducer(state,action);

    expect(newState.upgradeView).toEqual(!state.upgradeView);
  });

  it('should increment currentCash', function() {
    const state = {
      currentCash: 0,
      careerCash: 0,
      manualClicks: 0,
      clickValue: 1
    };
    const action = clickMain();
    const newState = mainReducer(state,action);
    
    expect(newState.currentCash).toEqual(state.currentCash + 1);
    expect(newState.careerCash).toEqual(state.careerCash + 1);
    expect(newState.manualClicks).toEqual(state.manualClicks + 1);

  });


});