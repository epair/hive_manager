import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import HivesTable from "../../app/javascript/bundles/App/components/HivesTable";

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

let props = {
  hives: [{
    id: 0,
    name: 'Main 1',
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
    number_of_frames: 8,
    one_line_address: '123 Main Street #2 Atlanta, GA 30327'
  }]
};

it("renders column headers and inspection rows", () => {
  act(() => {
    render(
      <MemoryRouter>
        <HivesTable {...props} />
      </MemoryRouter>, container);
  });

  expect(container.textContent).toEqual(
    expect.stringContaining('Name'),
    expect.stringContaining('Honey Stores'),
    expect.stringContaining('Queen Status'),
    expect.stringContaining('Condition'),
    expect.stringContaining('Potential Swarm'),
    expect.stringContaining('Brood'),
    expect.stringContaining('Feeder'),
    expect.stringContaining('Number of Boxes'),
    expect.stringContaining('Number of Frames'),
    expect.stringContaining('Notes'),
    expect.stringContaining('Address')
  );

  expect(container.textContent).toEqual(
    expect.stringContaining('Main 1'),
    expect.stringContaining('moderate'),
    expect.stringContaining('right'),
    expect.stringContaining('healthy'),
    expect.stringContaining('No'),
    expect.stringContaining('Larvae'),
    expect.stringContaining('8'),
    expect.stringContaining('3'),
    expect.stringContaining('notes for this visit'),
    expect.stringContaining('Yes'),
    expect.stringContaining('123 Main Street #2 Atlanta, GA 30327')
  );
});
