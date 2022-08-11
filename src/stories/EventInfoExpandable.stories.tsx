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
      { details: "Curfew", time: "10pm" },
    ],
    ticketTypes: [
      {
        name: "Ben Frost",
        price: { face_value: 12, fees: 1, total: 13 },
        sold_out: true,
        id: 123123124124,
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
