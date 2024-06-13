'use client'
import React, { useState } from 'react';
import styles from './styles.module.scss';

const ColorPicker = ({ onChange, newColor, setFinalColorSon }) => {

    // Calculate color based on gradient positions
    const getColor = (value: number) => {
        const colors = [
            { stop: 0, color: '#FF0000' },
            { stop: 25, color: '#FFA500' },
            { stop: 50, color: '#FFDD00' },
            { stop: 75, color: '#00FF00' },
            { stop: 100, color: '#00FFFF' },
        ];

        let color = '';
        for (let i = 0; i < colors.length - 1; i++) {
            const current = colors[i];
            const next = colors[i + 1];
            if (value >= current.stop && value <= next.stop) {
                const range = next.stop - current.stop;
                const position = (value - current.stop) / range;
                color = interpolateColor(current.color, next.color, position);
                break;
            }
        }
        return color;
    };

    const interpolateColor = (color1: string, color2: string, factor: number) => {
        const result = color1.slice(1).match(/.{2}/g)!.map((hex, i) => {
            const color1Val = parseInt(hex, 16);
            const color2Val = parseInt(color2.slice(1).match(/.{2}/g)![i], 16);
            const val = Math.round(color1Val + factor * (color2Val - color1Val)).toString(16);
            return val.padStart(2, '0');
        }).join('');
        setFinalColorSon(`#${result}`)
        return `#${result}`;
    };

    const color = getColor(newColor);

    return (
        <div className={styles['color-picker-container']}>
            <div className={styles['color-picker-bar']}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={newColor}
                    className={styles['color-range']}
                    onChange={onChange}
                />
            </div>
            <input
                type="text"
                value={color}
                readOnly
                className={styles['color-value']}
                style={{ backgroundColor: color, color: newColor > 50 ? '#000' : '#fff' }}
            />
        </div>
    );
};

export default ColorPicker;
