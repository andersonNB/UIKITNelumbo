'use client'
import React from 'react';
import { Input } from 'antd';
import styles from './styles.module.scss';
import { SearchOutlined } from '@ant-design/icons';

const CustomInput = ({onChange}:{onChange:()=>void}) => {
    return (
        <Input placeholder="Buscar"  className={styles['custom-input']} suffix={<SearchOutlined />} />
    )
};

export default CustomInput;