import { Checkbox, CheckboxProps } from "../components/Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Create account",
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};