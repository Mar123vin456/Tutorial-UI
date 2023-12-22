import type { Decorator, Meta, StoryObj } from "@storybook/react";
import ComponentStory from "./tooltip";
import TutorialContextProvider, { tutorialContextInitialState } from "../../utilities/tutorial-context/tutorial-context";

const meta = {
  title: "Molecules",
  component: ComponentStory,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ComponentStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {
  args: {
    children: <>Click Me</>,
    triggerType: "Click",
    content: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit qui officia.</>,
  },
};
