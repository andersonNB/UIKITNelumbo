'use client'
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import styles from './styles.module.scss';

const CustomCard: React.FC = ({ icon, text, altIcon = '' }) => (
    <Card className={styles['custom-width-card']} >
        <div className={styles.content} >
            <Image src={icon} alt={altIcon} className={styles.icon} />
            <p className={styles.text} >{text}</p>
        </div>
    </Card>
);

export default CustomCard;