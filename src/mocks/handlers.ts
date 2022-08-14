import { GetDiceEventsResponse } from "@/modules/event/types";
import { createMockDiceEventResponse, createMockEvent } from "./eventMocks";
import { rest } from "msw";
export const handlers = [
  rest.get<
    any,
    { "filter[venue]": string; "page[number]": string; "page[size]": string },
    GetDiceEventsResponse
  >("https://events-api.dice.fm/v1/events", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createMockDiceEventResponse([createMockEvent()])));
  }),
];
