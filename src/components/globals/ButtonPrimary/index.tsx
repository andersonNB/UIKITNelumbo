'use client'
import React from 'react';
import { Button } from 'antd';
import styles from './styles.module.scss';
import clsx from 'clsx';

export const CustomButtonText = ({ text, width, buttonDrawer }: { text: String | undefined, width?: Boolean | undefined, buttonDrawer?: Boolean }) => {

  const buttonClass = clsx(styles['custom-boton-primary'], {
    [styles['width-large']]: width,
    [styles['button-drawer']]: buttonDrawer,
  });

  return (
    <Button className={buttonClass} >{text}</Button>
  )
}
