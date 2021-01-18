import React from 'react';
import { shallow } from "enzyme";
import Gallery from "../Gallery";

it('component render without crashing', () => {
    let mountedHeader = shallow( <Gallery /> );
});