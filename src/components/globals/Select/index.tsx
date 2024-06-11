'use client'
import React from 'react';
import { Select, Space } from 'antd';
import styles from './styles.module.scss'

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const CustomSelect = ({ title, optionSelect }: { title: String, optionSelect: { value: String, label: String }[] }) => {


    return (
        <div className={styles.wrapperSelect}>
            <h4>{title}</h4>
            <Select
                defaultValue="Seleccione un perfil"
                allowClear
                onChange={handleChange}
                options={optionSelect}
                className={styles['custom-select']}
            />
        </div>
    )
}
export default CustomSelect;