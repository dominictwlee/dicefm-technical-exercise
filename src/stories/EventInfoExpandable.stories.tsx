import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventInfoExpandable from "../modules/event/EventInfoExpandable";
import { Box } from "@chakra-ui/react";

export default {
  title: "Components/EventInfoExpandable",
  component: EventInfoExpandable,
  args: {
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
    currency: "GBP",
  },
} as ComponentMeta<typeof EventInfoExpandable>;

const Template: ComponentStory<typeof EventInfoExpandable> = (args) => (
  <Box maxW="320px">
    <EventInfoExpandable {...args} />
  </Box>
);

export const Default = Template.bind({});
