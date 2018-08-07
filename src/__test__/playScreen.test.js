import React from 'react';
import {shallow } from 'enzyme';
import { clickMenu } from '../actions'

import { PlayScreen } from '../components/playScreen/playScreen';

describe('<PlayScreen />', function() {
  it('Renders without crashing', function(){
    shallow(<PlayScreen />);
  });

  // it('Renders the MENU button initially', () => {
  //   const wrapper = shallow(<PlayScreen />);
  //   // console.log(wrapper.debug());    
  //   expect(wrapper.hasClass('playscreen')).toEqual(true);
  // });

  it('Renders the MENU button initially', () => {
    const wrapper = shallow(<PlayScreen />);
    expect(wrapper.find('.menu-button').exists()).toEqual(true);
  });

  it('Should switch menuState when the MENU button is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<PlayScreen dispatch={dispatch}/>); 
    const button = wrapper.find('.menu-button');   
    button.simulate('click'); 
    expect(dispatch).toHaveBeenCalledWith(clickMenu())
  });

  // it('Renders the menu-screen after menu-button clicked', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(<PlayScreen dispatch={dispatch}/>); 
  //   const button = wrapper.find('.menu-button');   
  //   button.simulate('click');
  //   wrapper.update();
  //   console.log(wrapper.debug());
     
  //   expect(wrapper.find('.menu-screen').exists()).toEqual(true);
   
  // });



});