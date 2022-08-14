import { createMockDiceEventResponse, createMockEvent } from "@/mocks/eventMocks";
import { GetEventParams } from "@/modules/event/api";
import { GetDiceEventsResponse } from "@/modules/event/types";
import { rest } from "msw";

const searchableGetEventsHandler = (_rest: typeof rest) =>
  _rest.get<any, GetEventParams, GetDiceEventsResponse>(
    "https://events-api.dice.fm/v1/events",
    (req, res, ctx) => {
      return req.url.searchParams.get("filter[venue]") === "Cool Place"
        ? res(
            ctx.status(200),
            ctx.json(
              createMockDiceEventResponse([createMockEvent({ venue: "Cool Place", id: "abcd" })])
            )
          )
        : res(ctx.status(200), ctx.json(createMockDiceEventResponse([createMockEvent()])));
    }
  );

const paginatedGetEventsHandler = (_rest: typeof rest) =>
  _rest.get<any, GetEventParams, GetDiceEventsResponse>(
    "https://events-api.dice.fm/v1/events",
    (req, res, ctx) => {
      const pageNumber = req.url.searchParams.get("page[number]");
      const pageSize = req.url.searchParams.get("page[size]");

      const events = new Array(parseInt(pageSize!, 10))
        .fill(null)
        .map((_, index) => createMockEvent({ id: `${index}` }));

      const response = createMockDiceEventResponse(events, {
        next: "https://events-api.dice.fm/v1/events?filter[venues]=The+Waiting+Room&page[number]=2&page[size]=12",
        self: `https://events-api.dice.fm/v1/events?filter[venues]=The+Waiting+Room&page[number]=1&page[size]=${pageSize}`,
      });

      return res(ctx.status(200), ctx.json(response));
    }
  );

describe("Dice Events List Search", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays search results on button submit", () => {
    // Allow worker a bit of time to initiate
    cy.wait(1000);
    cy.window().then((window) => {
      const { worker, rest } = window.msw;
      worker.use(searchableGetEventsHandler(rest));
    });

    cy.findByLabelText(/venue search/i, { timeout: 7000 }).type("cool place");
    cy.findByRole("button", { name: /search/i }).click();
    cy.findByRole("heading", { name: /upcoming events at cool place/i }).should("exist");
    cy.findByTestId("event_abcd").within(() => {
      cy.findByRole("heading", { name: /cool place/i }).should("exist");
    });
  });

  it("displays search results on enter", () => {
    // Allow worker a bit of time to initiate
    cy.wait(1000);
    cy.window().then((window) => {
      const { worker, rest } = window.msw;
      worker.use(searchableGetEventsHandler(rest));
    });

    cy.findByLabelText(/venue search/i, { timeout: 7000 }).type("cool place{enter}");
    cy.findByRole("heading", { name: /upcoming events at cool place/i }).should("exist");
    cy.findByTestId("event_abcd").within(() => {
      cy.findByRole("heading", { name: /cool place/i }).should("exist");
    });
  });
});

describe("Dice Events Infinite List", () => {
  before(() => {
    cy.visit("/");
  });

  it("allows option to load more events if next page is available", () => {
    // Allow worker a bit of time to initiate
    cy.wait(1000);
    cy.window().then((window) => {
      const { worker, rest } = window.msw;
      worker.use(paginatedGetEventsHandler(rest));
    });

    cy.findByLabelText(/venue search/i, { timeout: 7000 }).type("dummy{enter}");

    cy.scrollTo("bottom");

    cy.findByRole("button", { name: /load more/i }).click();

    cy.findAllByRole("heading", { name: /Bukky Sky/i }).should("have.length", 24);
  });
});

export {};
