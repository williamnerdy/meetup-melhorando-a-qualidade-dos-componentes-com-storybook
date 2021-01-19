import React from 'react';
import Button from 'components/Button';
import Input from 'components/form/Input';
import Select from 'components/form/Select';

interface Props {
  onSignUp: () => void;
  onBack: () => void;
}

const SignUpPage: React.FC<Props> = ({ onSignUp, onBack }) => (
  <form onSubmit={() => false}>
    <Select
      name="my-select"
      label="Profile"
      options={[
        { name: 'Read', value: 1 },
        { name: 'Write', value: 2 },
        { name: 'Admin', value: 3 }
      ]}
    />
    <Input name="user" type="text" label="User" />
    <Input name="password" type="password" label="Password" />
    <Input name="repeat-password" type="password" label="Repeat password" />
    <div>
      <Button primary label="Sign up" size="medium" onClick={onSignUp} />
      <Button label="Back" size="medium" onClick={onBack} />
    </div>
  </form>
);

export default SignUpPage;
