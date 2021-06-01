import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InspectionRow from "../../app/javascript/bundles/App/components/InspectionRow";

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
  date: '2021-01-01', 
  honey_stores: 'moderate', 
  queen_status: 'right', 
  condition: 'healthy', 
  potential_swarm: false,
  egg_brood: false,
  larvae_brood: true,
  capped_brood: false,
  feeder: true,
  number_of_boxes: 3,
  notes: "notes for this visit",
  brood: ["Larvae"],
  number_of_frames: 8 
};

it("renders inspection row", () => {
  act(() => {
    render(<InspectionRow {...props} />, container);
  });

  expect(container.textContent).toEqual(
    expect.stringContaining('2021-01-01'),
    expect.stringContaining('moderate'),
    expect.stringContaining('right'),
    expect.stringContaining('healthy'),
    expect.stringContaining('No'),
    expect.stringContaining('Larvae'),
    expect.stringContaining('8'),
    expect.stringContaining('3'),
    expect.stringContaining('notes for this visit'),
    expect.stringContaining('Yes')
  );
});
