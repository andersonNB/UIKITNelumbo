'use client'
import React from 'react'
import { InputNumber } from 'antd'
import styles from './styles.module.scss';

export const CustomInputNumber = ({suffix ='dias'}) => {
  return (
    <InputNumber  addonAfter={suffix}  className={styles['ant-input-number-input-wrap']} defaultValue={0} />
  )
}
