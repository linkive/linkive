import type { Meta, StoryObj } from "@storybook/react";

import { Product } from "./Product";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Product",
  component: Product,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Group: Story = {
  args: {
    name: "CLASSIC OATMEAL",
    brand: "MARITHE",
    price: 98000,
    src: "https://img.29cm.co.kr/next-product/2021/09/29/fb051428229b498993488d177663c8a9_20210929215325.jpg?width=700",
  },
};

export const Solo: Story = {
  args: {
    solitary: true,
    name: "CLASSIC OATMEAL",
    brand: "MARITHE",
    price: 98000,
    src: "https://img.29cm.co.kr/next-product/2021/09/29/fb051428229b498993488d177663c8a9_20210929215325.jpg?width=700",
  },
};
