import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventCard from "../modules/event/EventCard";
import { Box } from "@chakra-ui/react";

export default {
  title: "Components/EventCard",
  component: EventCard,
  args: {
    date: new Date().toISOString(),
    description: `Earmilk: "Rooted in relatability and equal amounts of intimacy, bukky sky has carefully evolved his sound into a grounded pop-R&B fusion that feels soft yet upbeat all at once"\n\nRecently releasing "in the water" from upcoming EP HAPPYSEXYLOVEPOTION, bukky sky performs live with support from London local ELDR. After selling out The Old Blue Last and the Servant Jazz Quarters, make sure not to miss this "refreshing take on modern day pop" . BBC London Radio regular bukky sky promises good energy, heightened emotion and all-together fun, loved up times ❤️\n\nPresented by QM Records.\n\nThis is an 18+ event`,
    eventImages: {
      landscape: "/event_image_landscape.jpg",
      portrait: "/event_image_portrait.jpg",
      square: "/event_image_square.jpg",
    },

    lineup: [
      { details: "Ben Frost", time: "" },
      { details: "Tim Hecker", time: "" },
      { details: "Curfew", time: "10pm" },
    ],
    ticketTypes: [
      {
        name: "Basic",
        price: { face_value: 1200, fees: 100, total: 1300 },
        id: 123123124124,
      },
      {
        name: "VIP",
        price: { face_value: 1900, fees: 100, total: 2000 },
        sold_out: true,
        id: 2412412421,
      },
    ],
    location: {
      accuracy: 0,
      city: "London",
      country: "United Kingdom",
      lat: 51.5620818,
      lng: -0.0738883999999871,
      place: "Europe/London",
    },
    name: "Coolest Show On Planet Earth",
    saleStartDate: new Date().toISOString(),
    venue: "The Waiting Room",
    currency: "GBP",
  },
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => <EventCard {...args} />;

export const Default = Template.bind({});
