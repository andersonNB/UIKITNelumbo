'use client'
import React, { useState } from 'react';
import styles from './styles.module.scss';

const ColorPicker = () => {
    return (
        <div className={styles['color-picker-container']}>
            <div className={styles['color-picker-bar']}>
            </div>
        </div>
    );
};

export default ColorPicker;
