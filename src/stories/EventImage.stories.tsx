import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventImage, { EventImageVariant } from "../modules/event/EventImage";
import { Box } from "@chakra-ui/react";
import { addDays } from "date-fns";

export default {
  title: "Components/EventImage",
  component: EventImage,
  args: {
    eventImages: {
      landscape: "/event_image_landscape.jpg",
      portrait: "/event_image_portrait.jpg",
      square: "/event_image_square.jpg",
    },
    saleStartDate: new Date().toISOString(),
  },
} as ComponentMeta<typeof EventImage>;

const Template: ComponentStory<typeof EventImage> = (args) => <EventImage {...args} />;

export const Square = Template.bind({});
Square.args = {
  variant: EventImageVariant.Square,
};

export const Landscape = Template.bind({});
Landscape.args = {
  variant: EventImageVariant.Landscape,
};

export const Featured = Template.bind({});
Featured.args = {
  isFeatured: true,
};

export const FutureOnSale = Template.bind({});
FutureOnSale.args = {
  saleStartDate: addDays(new Date(), 1).toISOString(),
};
