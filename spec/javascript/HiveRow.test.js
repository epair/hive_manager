import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import HiveRow from "../../app/javascript/bundles/HivesTable/components/HiveRow";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("tbody");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

let props = {
  id: 0,
  name: 'Main 1',
  honey_stores: 'moderate',
  queen_status: 'right',
  condition: 'healthy',
  potential_swarm: false,
  feeder: true,
  number_of_boxes: 3,
  one_line_address: "123 Main Street #2 Atlanta, GA 30319",
  brood: ["Larvae"],
  number_of_frames: 8
};

it("renders hive row", () => {
  act(() => {
    render(<HiveRow {...props} />, container);
  });

  expect(container.textContent).toEqual(
    expect.stringContaining('Main 1'),
    expect.stringContaining('moderate'),
    expect.stringContaining('right'),
    expect.stringContaining('healthy'),
    expect.stringContaining('No'),
    expect.stringContaining('Larvae'),
    expect.stringContaining('8'),
    expect.stringContaining('3'),
    expect.stringContaining('123 Main Street #2 Atlanta, GA 30319'),
    expect.stringContaining('Yes')
  );
});
