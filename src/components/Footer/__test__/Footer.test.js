import React from 'react';
import { shallow } from "enzyme";
import Footer from "../Footer";

it('component render without crashing', () => {
    let mountedHeader = shallow( <Footer /> );
});