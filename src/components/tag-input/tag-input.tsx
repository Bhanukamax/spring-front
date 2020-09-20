import Tag from 'components/tag/tag';
import React, { useEffect, useState } from 'react';
import './tag-input.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tags?: string[];
  onChange: any;
}
export default function TagInput({
  label,
  id,
  tags = [''],
  onChange,
  ...rest
}: Props) {
  const [values, setValues] = useState(tags || ['']);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValues(tags);
  }, [tags]);

  const handleOnChange = (
    e: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.key === ',') return;
    setValue(e.target.value);
  };

  const handleOnKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (e.key === ',') {
      setValue('');
      const newValues = [...values, value.substr(0, value.length - 1)];
      setValues(newValues);
      return onChange(newValues);
    }

    setValue(e.target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setValue('');
      const newValues = [...values, value];
      setValues(newValues);
      return onChange(newValues);
    }
  };
  return (
    <>
      <div className='tag-input'>
        <label htmlFor={id} className='tag-input__label'>
          {label}
        </label>
        <div className='tag-input__box'>
          {values?.map((tag: any, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          <input
            value={value}
            id={id}
            {...rest}
            onChange={handleOnChange}
            onKeyUp={handleOnKeyUp}
            onKeyPress={handleOnKeyPress}
          ></input>
        </div>
      </div>
    </>
  );
}
