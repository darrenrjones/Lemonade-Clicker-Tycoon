import React from 'react';
import {shallow } from 'enzyme';

import { Main } from '../components/main';

describe('<Main />', function() {
  it('Renders without crashing', function(){
    shallow(<Main />);
  });
});