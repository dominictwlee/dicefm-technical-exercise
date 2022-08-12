import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventSearchBar from "../modules/event/EventSearchBar";

export default {
  title: "Components/EventSearchBar",
  component: EventSearchBar,
} as ComponentMeta<typeof EventSearchBar>;

const Template: ComponentStory<typeof EventSearchBar> = (args) => <EventSearchBar {...args} />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  status: "loading",
};
