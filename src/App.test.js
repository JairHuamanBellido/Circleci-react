import React from 'react';
import App from './App';
import { expect } from "chai";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const component = shallow(<App />);

  expect(component.contains(<Link to="/">Home</Link>)).to.equal(true);


});
