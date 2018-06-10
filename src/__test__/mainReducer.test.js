import mainReducer from '../reducers/mainReducer';
import {
  clickMenu,
  clickUpgradeMenu, 
  clickMain, 
  toggleSignedinState, 
  purchaseAutoClickerEmployee,
  purchaseAutoClickerTruck,
  purchaseAutoClickerPlane,
  purchaseUpgradeOrganic,
  purchaseUpgradeDowntown,
  purchaseUpgradeNewYork,
  fetchUserRequest, 
} from '../actions';

describe('mainReducer', function(){

  it('should switch menuState when MENU clicked', function() {
    const state = {
      menuState: false
    };
    const action = clickMenu();
    const newState = mainReducer(state,action);

    expect(newState.menuState).toEqual(!state.menuState);
  });

  it('should switch upgradeView when upgrade menu clicked', function() {
    const state = {
      upgradeView: false
    };
    const action = clickUpgradeMenu();
    const newState = mainReducer(state,action);

    expect(newState.upgradeView).toEqual(!state.upgradeView);
  });

  it('should increment state with clickMain()', function() {
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

  it('should toggle signedIn state', function() {
    const state = {signedIn: false}
    const action = toggleSignedinState();
    const newState = mainReducer(state,action);
    expect(newState.signedIn).toEqual(!state.signedIn);
  });
  it('should toggle purchase auto clicker employee', function() {
    const state = {
      assets: {
        employees: 0,
        trucks: 0,
        planes: 0
      },
      currentCash: 100,
    }
    const action = purchaseAutoClickerEmployee();
    const newState = mainReducer(state,action);
    expect(newState.assets.employees).toEqual(state.assets.employees + 1);
    expect(newState.assets.trucks).toEqual(0);
    expect(newState.currentCash).toEqual(90);
  });
  it('should toggle purchase auto clicker truck', function() {
    const state = {
      assets: {
        employees: 0,
        trucks: 0,
        planes: 0
      },
      currentCash: 100,
    }
    const action = purchaseAutoClickerTruck();
    const newState = mainReducer(state,action);
    expect(newState.assets.trucks).toEqual(state.assets.trucks + 1);
    expect(newState.assets.employees).toEqual(0);
    expect(newState.currentCash).toEqual(0);
  });
  it('should toggle purchase auto clicker truck', function() {
    const state = {
      assets: {
        employees: 0,
        trucks: 0,
        planes: 0
      },
      currentCash: 1000,
    }
    const action = purchaseAutoClickerPlane();
    const newState = mainReducer(state,action);
    expect(newState.assets.planes).toEqual(state.assets.planes + 1);
    expect(newState.assets.employees).toEqual(0);
    expect(newState.assets.trucks).toEqual(0);
    expect(newState.currentCash).toEqual(0);
  });

  it('should purchase upgrade organic and set state', function() {
    const state = {
      clickValue: 1,
      upgrades: {
        organic: false,
        downtown: false,
        newyork: false
      },
      currentCash: 550
    }
    const action = purchaseUpgradeOrganic();
    const newState = mainReducer(state,action);
    expect(newState.upgrades.organic).toEqual(true);
    expect(newState.currentCash).toEqual(50);
  });
  it('should purchase upgrade downtown and set state', function() {
    const state = {
      clickValue: 1,
      upgrades: {
        organic: false,
        downtown: false,
        newyork: false
      },
      currentCash: 5050
    }
    const action = purchaseUpgradeDowntown();
    const newState = mainReducer(state,action);
    expect(newState.upgrades.downtown).toEqual(true);
    expect(newState.currentCash).toEqual(50);
  });
  it('should purchase upgrade new york and set state', function() {
    const state = {
      clickValue: 1,
      upgrades: {
        organic: false,
        downtown: false,
        newyork: false
      },
      currentCash: 50050
    }
    const action = purchaseUpgradeNewYork();
    const newState = mainReducer(state,action);
    expect(newState.upgrades.newyork).toEqual(true);
    expect(newState.currentCash).toEqual(50);
  });

  it('should set loading to true', function() {
    const state = {
      loading: false
    }
    const action = fetchUserRequest();
    const newState = mainReducer(state,action);
    expect(newState.loading).toEqual(true);
  });

});