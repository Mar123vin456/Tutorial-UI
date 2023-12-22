import type { Decorator, Meta, StoryObj } from "@storybook/react";
import ComponentStory from "./spotlight";
import TutorialContextProvider, { tutorialContextInitialState } from "../../utilities/tutorial-context/tutorial-context";

const meta = {
  title: "Molecules",
  component: ComponentStory,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <TutorialContextProvider initialState={tutorialContextInitialState}>
          <Story />
        </TutorialContextProvider>
      );
    },
  ],
} satisfies Meta<typeof ComponentStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spotlight: Story = {
  args: { isActive: true, order: 1, children: <>Spot Me</> },
};
