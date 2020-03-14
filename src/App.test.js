import React from 'react';
import App from './App';
import Enzyme from "enzyme";
import {  shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const component =  shallow(<App />);

  expect(component.getElements()).toMatchSnapshot();

});
