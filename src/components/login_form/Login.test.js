import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
import Login from './Login';
var jsdom = require('mocha-jsdom');
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import * as enzyme from 'enzyme';
import { spy } from 'sinon';

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

  it('Renders Login Button ', () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });
    expect(rootContainer.querySelector('Button')).to.exist;
  });
});

describe('MochaTestApp Component Testing', () => {
  it('Click Login Button ', () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });

    // const buttonElement = rootContainer.querySelector('Button');
    // buttonElement.simulate('click') 

    const wrapper = mount(<Login />);
    wrapper.find('button.buttonTest').simulate('click');
    wrapper.update();
    wrapper.update();

    expect(wrapper.find('.modalMessageTest').exists()).equal(true);
  });
});

// expect(wrapper.find('.Button').length).to.equal(1);
//   wrapper.rootContainer.querySelector('Button').simulate('click',{ preventDefault() {} });

// expect(wrapper.find('.clicks-1').length).to.equal(1);

//  buttonElement.click();

//    wrapper.find('.buttonTest').simulate('click');

//    wrapper.find('.buttonTest').simulate('click');

//    wrapper.find('.buttonTest').simulate('click');

//    wrapper.find('.buttonTest').simulate('click');

//    wrapper.find('formErrors.isPopup').simulate('click');
// expect(wrapper.state('formErrors.isPopup').to.equal(true));

//    wrapper.find('.buttonTest').first().simulate('click');

// wrapper.update();

//    console.log("button",find('.buttonTest'));
//    wrapper.find('.buttonTest').first().simulate('click');

//    expect(wrapper.state('formErrors.isPopup')).to.equal(true);

//    console.log(wrapper.find(".modalMessageTest"));

// describe('Form', () => {
//   it('submit event when click submit', () => {
//     const wrapper = mount(<Login />);
//     wrapper.find('form').simulate('submit', { preventDefault() {} });
//     //   expect(callback).to.have.been.called();
//   });
// });

//   ./node_modules/.bin/mocha --require babel-register ./src/components/login_form/Login.test.js

// describe('Form', () => {
//     it('submit event when click submit', () => {
//     //   const callback = spy();
//       const wrapper = mount(<Login    />);
//     //   wrapper.find('[type="submit"]').simulate.click();
//     //   expect(callback).to.have.been.called();
//     wrapper.find('button').simulate('click', {});
//     expect(spy()).toHaveBeenCalled();

//     });
//   });
