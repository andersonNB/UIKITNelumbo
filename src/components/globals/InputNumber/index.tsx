'use client'
import React from 'react'
import { Input, InputNumber } from 'antd'
import styles from './styles.module.scss';

export const CustomInputNumber = ({suffix ='dias'}) => {
  return (
    <InputNumber  suffix={suffix}  className={styles['ant-input-number-input-wrap']}  />
  )
}
