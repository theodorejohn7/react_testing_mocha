import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
import Login from './Login';
var jsdom = require('mocha-jsdom');
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
 
configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.document = jsdom({
  url: 'http://localhost:3000/'
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement('div');
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe('MochaTestApp Component Testing', () => {
  it('Renders Login Form Title', () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });

    expect(rootContainer.querySelector('.loginTest').textContent).to.equal('Login Form');
  });

  it('Renders Username Textfield ', () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });
    expect(rootContainer.querySelector('.usernameTest')).to.exist;
  });

  it('Renders Password Field ', () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });
    expect(rootContainer.querySelector('.passwordTest')).to.exist;
  });

  it('Renders Login Button ', () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });
    expect(rootContainer.querySelector('Button')).to.exist;
  });

  
});

