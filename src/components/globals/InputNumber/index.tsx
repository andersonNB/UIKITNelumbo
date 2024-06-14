'use client'
import React, { useState } from 'react'
import { Input } from 'antd'
import styles from './styles.module.scss';

export const CustomInputNumber = ({ suffix = 'dias' }) => {

  const [value, setValue] = useState(null);

  const onChangeValue = (val) => {
    const { value } = val.target;
    const sanitizedValue = sanitizeInput(value);
    setValue(sanitizedValue);
  };

  const sanitizeInput = (value) => {
    return value ? value.toString().replace(/[^0-9]/g, '') : '';
  };

  return (
    <Input
      value={value}
      onChange={onChangeValue}
      className={styles['ant-input-number-input-wrap']}
      suffix={suffix} />
  )
}
