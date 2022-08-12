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
        price: { face_value: 12, fees: 1, total: 13 },
        id: 123123124124,
      },
      {
        name: "VIP",
        price: { face_value: 19, fees: 1, total: 20 },
        sold_out: true,
        id: 2412412421,
      },
    ],
  },
} as ComponentMeta<typeof EventInfoExpandable>;

const Template: ComponentStory<typeof EventInfoExpandable> = (args) => (
  <Box maxW="320px">
    <EventInfoExpandable {...args} />
  </Box>
);

export const Default = Template.bind({});
