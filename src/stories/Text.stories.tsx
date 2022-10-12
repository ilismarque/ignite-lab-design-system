import { Text, TextProps } from "../components/Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = { args: { size: "sm" } };
export const Medium: StoryObj<TextProps> = { args: { size: "lg" } };

export const CustomComponent: StoryObj<TextProps> = {
  args: {
     asChild: true,
    children: <p>Text with paragraph</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
