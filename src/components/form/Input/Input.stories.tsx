import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { Props } from './Input';

export default {
  title: 'form/Input',
  component: Input
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'with-label',
  label: 'My label'
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  name: 'with-placeholder',
  placeholder: 'My placeholder'
};
