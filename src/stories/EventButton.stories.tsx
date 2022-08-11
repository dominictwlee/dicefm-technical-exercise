import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventButton from "../modules/events/EventButton";

export default {
  title: "Components/EventButton",
  component: EventButton,
} as ComponentMeta<typeof EventButton>;

const Template: ComponentStory<typeof EventButton> = (args) => <EventButton {...args} />;

export const BookNow = Template.bind({});
BookNow.args = {
  children: "Book Now",
};

export const GetReminded = Template.bind({});
GetReminded.args = {
  children: "Get Reminded",
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  children: "Sold out",
  isDisabled: true,
};
