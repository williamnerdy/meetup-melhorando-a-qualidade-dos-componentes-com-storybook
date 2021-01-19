import React from 'react';
import './Select.css';

export interface Props {
  name: string;
  label?: string;
  options: Array<{ name: string; value: string | number }>;
}

const Select: React.FC<Props> = ({ name, label, options }) => (
  <div className="select-wrapper">
    {label && <label htmlFor={`select-${name}`}>{label}</label>}
    <select id={`select-${name}`} name={`select-${name}`} className="select-field">
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
