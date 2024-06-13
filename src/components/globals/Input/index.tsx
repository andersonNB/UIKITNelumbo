'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Tooltip } from 'antd';
import Image from 'next/image';
import styles from './styles.module.scss';
import iconEdit from '@/assets/icons/icon_search.svg';

const CustomInput = ({ onChange }: { onChange: () => void }) => {

    const {t} = useTranslation();

    return (
        <Input placeholder="Buscar" className={styles['custom-input']} suffix={<Tooltip title={t('icons.search')}><Image src={iconEdit} alt='Icon search input' /></Tooltip>} />
    )
};

export default CustomInput;