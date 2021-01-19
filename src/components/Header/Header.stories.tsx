import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { Props } from './Header';

export default {
  title: 'Header',
  component: Header
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
