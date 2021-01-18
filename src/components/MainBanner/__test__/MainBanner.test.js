import React from 'react';
import { shallow } from "enzyme";

import MainBanner from '../MainBanner';

it('component render without crashing', () => {
    let mountedHeader = shallow( <MainBanner /> );
});