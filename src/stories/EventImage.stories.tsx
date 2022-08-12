import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventImage, { EventImageVariant } from "../modules/event/EventImage";
import { Box } from "@chakra-ui/react";

export default {
  title: "Components/EventImage",
  component: EventImage,
  args: {
    eventImages: {
      landscape: "/event_image_landscape.jpg",
      portrait: "/event_image_portrait.jpg",
      square: "/event_image_square.jpg",
    },
  },
} as ComponentMeta<typeof EventImage>;

const Template: ComponentStory<typeof EventImage> = (args) => (
  <Box maxW="320px">
    <EventImage {...args} />
  </Box>
);

export const Square = Template.bind({});
Square.args = {
  variant: EventImageVariant.Square,
};

export const Portrait = Template.bind({});
Portrait.args = {
  variant: EventImageVariant.Portrait,
};

export const Landscape = Template.bind({});
Landscape.args = {
  variant: EventImageVariant.Landscape,
};
