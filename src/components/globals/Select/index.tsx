'use client'
import React from 'react';
import { Select, Space } from 'antd';
import styles from './styles.module.scss'
import clsx from 'clsx';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const CustomSelect = ({ title, optionSelect,fullWidth }: { title: String, optionSelect: { value: String, label: String }[], fullWidth:Boolean }) => {

    const wrapperWidth = clsx(styles['custom-select'], {
        [styles['full-width']]:fullWidth
    });

    return (
        <div className={styles.wrapperSelect}>
            <h4>{title}</h4>
            <Select
                defaultValue="Seleccione un perfil*"
                allowClear
                onChange={handleChange}
                options={optionSelect}
                className={wrapperWidth}
            />
        </div>
    )
}
export default CustomSelect;