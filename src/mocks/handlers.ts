import { GetDiceEventsResponse } from "@/modules/event/types";
import { createMockDiceEventResponse, createMockEvent } from "@/pages/mocks/eventMocks";
import { rest } from "msw";
export const handlers = [
  // Handles a POST /login request
  rest.get<
    any,
    { "filter[venue]": string; "page[number]": string; "page[size]": string },
    GetDiceEventsResponse
  >("/v1/events", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createMockDiceEventResponse([createMockEvent()])));
  }),
];
