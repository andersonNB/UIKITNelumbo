'use client'
import React from 'react';
import { Card } from 'antd';
import styles from './styles.module.scss';

const CustomCard: React.FC = ({ icon, text }) => (
    <Card className={styles['custom-width-card']} >
        <div className={styles.content} >
            {icon}
            <p className={styles.text} >{text}</p>
        </div>
    </Card>
);

export default CustomCard;