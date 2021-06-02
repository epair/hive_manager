import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MenuBar from "../../app/javascript/bundles/App/components/MenuBar";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders app name when signed out", () => {
  let props = {
    current_user: {},
    signed_in: false
  };

  act(() => {
    render(<MenuBar {...props} />, container);
  });

  expect(container.textContent).toEqual('Hive Manager');
});
