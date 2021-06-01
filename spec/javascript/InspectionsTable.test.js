import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import InspectionsTable from "../../app/javascript/bundles/InspectionsTable/components/InspectionsTable";

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
  inspections: [{
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
  }]
};

it("renders column headers and inspection rows", () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={["/hives/0"]}>
        <InspectionsTable {...props} />
      </MemoryRouter>, container);
  });

  expect(container.textContent).toEqual(
    expect.stringContaining('Date'),
    expect.stringContaining('Honey Stores'),
    expect.stringContaining('Queen Status'),
    expect.stringContaining('Condition'),
    expect.stringContaining('Potential Swarm'),
    expect.stringContaining('Brood'),
    expect.stringContaining('Feeder'),
    expect.stringContaining('Number of Boxes'),
    expect.stringContaining('Number of Frames'),
    expect.stringContaining('Notes')
  );

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
