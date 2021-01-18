import React from 'react';
import { shallow } from "enzyme";
import Home from '../Home';


describe('Home container', () => {
    let mountedHome;

    beforeEach(() => {
        mountedHome = shallow(<Home />);
    });

    it('should render without crashing', function () {
        let mountedHeader = shallow( <Home /> );
    });

    it('should renders a Header', function () {
        const header = mountedHome.find('Header');
        expect(header.length).toBe(1);
    });
});

