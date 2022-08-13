import { Box, SimpleGrid, Grid, Center, Heading, GridItem } from "@chakra-ui/react";
import { getEvents } from "@/modules/event/api";
import { GetDiceEventsResponse } from "@/modules/event/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EventCard from "@/modules/event/EventCard";
import EventSearchBar from "@/modules/event/EventSearchBar";

interface EventListHomeProps {
  events: GetDiceEventsResponse;
}
const EventListHome: NextPage<EventListHomeProps> = (props) => {
  const [searchTerms, setSearchTerms] = useState("");
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery(["events", { searchTerms }], ({ pageParam = 1 }) =>
      getEvents({ filter: { venue: searchTerms }, page: { number: pageParam } })
    );

  const onSearchSubmit = (value: string) => {
    setSearchTerms(value);
  };

  return (
    <Box py={8} minH="100vh">
      <Head>
        <title>DICE Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box px={20} mb={20}>
        <EventSearchBar status={status} onSubmit={onSearchSubmit} />
      </Box>

      <Box as="main">
        <Center>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              "2xl": "repeat(4, 1fr)",
            }}
            gap={8}
          >
            <GridItem
              colSpan={{
                base: 1,
                md: 2,
                lg: 3,
                "2xl": 4,
              }}
              minH="30px"
            >
              <Heading variant="title2" as="h1" textAlign="left">
                Upcoming events {searchTerms ? `at ${searchTerms}` : null}
              </Heading>
            </GridItem>

            {data?.pages.map((response) => {
              console.log(response);

              return response.data.map((event) => {
                return (
                  <GridItem key={event.id}>
                    <EventCard
                      saleStartDate={event.sale_start_date}
                      eventImages={event.event_images}
                      date={event.date}
                      name={event.name}
                      location={event.location}
                      description={event.description}
                      lineup={event.lineup}
                      ticketTypes={event.ticket_types}
                      currency={event.currency}
                      isFeatured={event.featured}
                      venue={event.venue}
                    />
                  </GridItem>
                );
              });
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default EventListHome;
