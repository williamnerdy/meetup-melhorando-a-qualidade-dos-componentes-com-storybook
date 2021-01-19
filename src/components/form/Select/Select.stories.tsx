import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { Props } from './Select';

export default {
  title: 'form/Select',
  component: Select
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'my-select',
  label: 'My label',
  options: [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
  ]
};
