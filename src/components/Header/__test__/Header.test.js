import React from 'react';
import { shallow } from "enzyme";

import Header from '../Header';

it('component render without crashing', () => {
    let mountedHeader = shallow( <Header /> );
});