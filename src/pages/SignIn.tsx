import React from 'react';
import Button from 'components/Button';
import Input from 'components/form/Input';

interface Props {
  onLogin: () => void;
}

const SignInPage: React.FC<Props> = ({ onLogin }) => (
  <form onSubmit={() => false}>
    <Input name="user" type="text" label="User" />
    <Input name="password" type="password" label="Password" />
    <Button primary label="Sign in" size="medium" onClick={onLogin} />
  </form>
);

export default SignInPage;
