import React from 'react';
import {shallow } from 'enzyme';

import { PlayScreen } from '../components/playScreen/playScreen';

describe('<PlayScreen />', function() {
  it('Renders without crashing', function(){
    shallow(<PlayScreen />);
  });
  it('Renders the MENU button initially', () => {
    const wrapper = shallow(<PlayScreen />);
    // expect(wrapper.hasClass('menu-button')).toExist;
    expect(wrapper.find('.menu-button').exists()).toEqual(true);
  });


});