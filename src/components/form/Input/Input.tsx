import React from 'react';
import './Input.css';

export interface Props {
  name: string;
  type?: 'text' | 'password';
  label?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ name, type, placeholder, label }) => (
  <div className="input-wrapper">
    {label && <label htmlFor={`input-${name}`}>{label}</label>}
    <input
      type={type}
      id={`input-${name}`}
      name={`input-${name}`}
      placeholder={placeholder}
      className="input-field"
    />
  </div>
);

export default Input;
