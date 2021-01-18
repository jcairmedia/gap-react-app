import React from 'react';
import { shallow } from "enzyme";
import App from "../App";

describe('App', function (){
  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('here renders a main component', () => {
    let mountedApp = shallow(<App />);
    const home = mountedApp.find('Home');
    expect(home.length).toBe(1);
  });
});