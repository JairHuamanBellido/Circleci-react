
import React from 'react';
import renderer from 'react-test-renderer';
import Name from "./Name";


describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(false).toEqual(true);
  });
});


describe('Name', ()=>{
  it('Contain Name', ()=>{
    const component = renderer.create(<Name name="hola"/>);
    let tree =  component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})