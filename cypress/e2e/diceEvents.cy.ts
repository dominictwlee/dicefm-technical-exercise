import { GetDiceEventsResponse } from "@/modules/event/types";
import { createMockDiceEventResponse, createMockEvent } from "@/mocks/eventMocks";
import EventButton from "../../src/modules/event/EventButton";

describe("Dice Events List Homepage", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays search bar", () => {
    cy.findByRole("button", { name: /search/i }).should("exist");
  });
});
