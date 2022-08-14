import ky from "ky";
import { GetDiceEventsResponse } from "./types";

export interface GetEventParams {
  "filter[venue]": string;
  "page[number]": string;
  "page[size]": string;
}

const api = ky.extend({
  prefixUrl: "https://events-api.dice.fm/v1",
  hooks: {
    beforeRequest: [
      (request) => {
        if (process.env.NEXT_PUBLIC_API_KEY) {
          request.headers.set("x-api-key", process.env.NEXT_PUBLIC_API_KEY);
        }
      },
    ],
  },
});

interface GetEventsSearchParams {
  filter?: {
    venue: string;
  };
  page?: {
    number: number;
    size?: number;
  };
}

export function getEvents(params?: GetEventsSearchParams): Promise<GetDiceEventsResponse> {
  const searchParams: Record<string, string> = {
    "page[size]": "12",
  };

  if (params?.filter?.venue) {
    searchParams["filter[venue]"] = params.filter.venue;
  }

  if (params?.page) {
    if (params.page.number) {
      searchParams["page[number]"] = params.page.number.toString();
    }
    if (params.page.size) {
      searchParams["page[size]"] = params.page.size.toString();
    }
  }

  return api
    .get("events", {
      searchParams: new URLSearchParams(searchParams),
    })
    .json<GetDiceEventsResponse>();
}
