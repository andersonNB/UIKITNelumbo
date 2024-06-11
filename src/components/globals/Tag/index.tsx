'use client'
import React from 'react'
import { Tag } from 'antd'
import styles from './styles.module.scss';

export const CustomTag = ({ tag }: { tag: String }) => {

    let choosingColor = tag === 'Critico' ? '#FF4D4F' : tag === 'Alto' ? '#FAAD14' : tag === 'Medio' ? '#FFDD00' : '#31C462';

    return (
        <Tag color={choosingColor} className={styles['custom-tag']}>
            {tag.toUpperCase()}
        </Tag>
    )
}
