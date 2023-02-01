import { Component } from './Component';

export default {
  title: 'Component',
  component: Component,
};


const Template = (args) => <Component {...args} />;

export const Story = {
  args: {},
};
