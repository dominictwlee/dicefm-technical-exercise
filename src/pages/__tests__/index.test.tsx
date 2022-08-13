import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventListHome from "../index";
import { DiceEvent, GetDiceEventsResponse } from "@/modules/event/types";
import { createMockEvent, createMockDiceEventResponse } from "../mocks/eventMocks";

const server = setupServer(
  rest.get<
    any,
    { "filter[venue]": string; "page[number]": string; "page[size]": string },
    GetDiceEventsResponse
  >("/v1/events", (req, res, ctx) => {
    return res(ctx.json(createMockDiceEventResponse([createMockEvent()])));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("displays search bar", async () => {
  render(<EventListHome />);

  expect(screen.getByRole("button", { name: /search/i })).not.toBeDisabled();
  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button", {})).toBeDisabled();
});

// test("handles server error", async () => {
//   server.use(
//     rest.get("/greeting", (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );

//   render(<Fetch url="/greeting" />);

//   fireEvent.click(screen.getByText("Load Greeting"));

//   await waitFor(() => screen.getByRole("alert"));

//   expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
//   expect(screen.getByRole("button", { name: /search/i })).not.toBeDisabled();
// });
