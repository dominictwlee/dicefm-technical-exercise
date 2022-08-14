import { useInfiniteQuery } from "@tanstack/react-query";
import { getEvents } from "./api";

export function useInfiniteSearchEvents(searchTerms: string) {
  return useInfiniteQuery(
    ["events", { searchTerms }],
    ({ pageParam = 1 }) =>
      getEvents({ filter: { venue: searchTerms }, page: { number: pageParam } }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.links.next) {
          return new URL(lastPage.links.next).searchParams.get("page[number]");
        }
      },
    }
  );
}
