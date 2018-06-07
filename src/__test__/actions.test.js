import { CLICK_MENU, clickMenu } from '../actions'

describe('clickMenu', function() {
  it('Should return the action', () => {
    const action = clickMenu();
    expect(action).toEqual({
      type: CLICK_MENU
    })
  });
});