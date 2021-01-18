import React from 'react';
import { shallow } from "enzyme";

import Welcome from '../Welcome';

it('component render without crashing', () => {
    let mountedHeader = shallow( <Welcome /> );
});