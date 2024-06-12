'use client'
import React from 'react';
import { Input, Tooltip } from 'antd';
import styles from './styles.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const CustomInput = ({ onChange }: { onChange: () => void }) => {

    const {t} = useTranslation();

    return (
        <Input placeholder="Buscar" className={styles['custom-input']} suffix={<Tooltip title={t('icons.search')}><SearchOutlined /></Tooltip>} />
    )
};

export default CustomInput;