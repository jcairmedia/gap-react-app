import React from 'react';
import { shallow } from "enzyme";

import Discover from "../Discover";

it('component render without crashing', () => {
    let mountedHeader = shallow( <Discover /> );
});