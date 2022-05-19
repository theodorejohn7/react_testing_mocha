import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

import Login from "./Login"

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("MochaTestApp Component Testing", () => {
  it("Renders Login Form Title", () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });
    const h1 = rootContainer.querySelector("Typography");
    expect(h1.textContent).to.equal("Login Form");
  });
});