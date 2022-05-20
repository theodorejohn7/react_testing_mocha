import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
import Login from './Login';
var jsdom = require('mocha-jsdom');
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
// import matcher from 'chai-react-element';
import { formErrors } from './Login';
import chai from 'chai';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';
import Modal from './Login';

configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// global.window = window;
// global.navigator = navigator;

global.document = jsdom({
  url: 'http://localhost:3001/'
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

  // it('Renders Login Button ', () => {
  //   act(() => {
  //     ReactDOM.render(<Login />, rootContainer);
  //   });
  //   expect(rootContainer.querySelector('Button')).to.exist;
  // });

  // it('Click @Login Button ', () => {
  //   act(() => {
  //     ReactDOM.render(<Login />, rootContainer);
  //   });

  //   // const buttonElement = rootContainer.querySelector('.buttonTest_mocha');
  //   // buttonElement.simulate('click')

  //   const wrapper = mount(<Login />);
  //   // expect (formErrors).to.equal(false);
  //   wrapper.find('.buttonTest_mocha').at(0).simulate('click');

  //   // wrapper.findWhere(n =>  n.text() === 'Login').simulate('click');
  //   // wrapper.findWhere(n =>  n.text() === 'Login').simulate('click');
  //   expect(wrapper.find('.modalMessageTest').exists()).to.be.true;

  //   // expect(wrapper.find(<span>Please check on below</span>).exists()).to.be.true;
  //   // expect(wrapper.contains(<Modal />)).to.be(false)
  //   // chai.assert.equal('.modalMessageTest'.is(':visible'), true);
  //   // expect(document.querySelector('.modalMessageTest')).to.contain('<span>Username is required</span>');

  //   // expect(document.querySelector('.modalMessageTest')).to.have.text('Chai Tea')


  //   setTimeout(function () {
  //     // chai.assert.equal($("#completed-task").is(":visible"), true);
  //     // expect(wrapper.contains("Please check on below")).to.be.true;
  //     // expect(wrapper.findWhere(n =>  n.text() === 'Logn')  ).to.exist;
  //     // expect(wrapper.find(<span>Please check on below</span>).exists()).to.be.true;
  //     // done();
  //   }, 100);

  //   // expect(wrapper.findWhere( n => n.text() === 'Please')).to.exist;

  //   // expect(wrapper.find('Please check on below')).lengthOf().equal(true);
  // });
});

// it('should call onSetCountdown if valid seconds entered', () => {
//     const spy = sinon.spy();
//     const countDownForm = shallow(<Login onSetCountdown={spy}/>)

//     // countDownForm.refs.seconds.value = '109';
//     countDownForm.find('form').simulate('submit', { preventDefault(){} })

//     expect(spy.called).to.be.true;
//   });

// const wrapper = mount(<Login />);
// wrapper.find('button.buttonTest').simulate('click');

//     wrapper.find('.buttonTest_mocha').at(0).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(0).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(0).simulate('click');

//     wrapper.find('.buttonTest_mocha').at(1).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(1).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(1).simulate('click');

//     wrapper.find('.buttonTest_mocha').at(2).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(2).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(2).simulate('click');

//     wrapper.find('.buttonTest_mocha').at(3).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(3).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(3).simulate('click');

//     wrapper.find('.buttonTest_mocha').at(4).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(4).simulate('click');
//     wrapper.find('.buttonTest_mocha').at(4).simulate('click');

// console.log("hello_console", wrapper.find('.buttonTest_mocha').at(4));

// wrapper.update();
// wrapper.update();
//   expect(selector).dom.to.be.displayed()

// expect(wrapper.find('.modalMessageTest')).to.be.displayed();

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
