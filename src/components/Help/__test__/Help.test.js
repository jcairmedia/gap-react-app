import React from 'react';
import { shallow } from "enzyme";

import Help from "../Help";

it('component render without crashing', () => {
    let mountedHeader = shallow( <Help /> );
});