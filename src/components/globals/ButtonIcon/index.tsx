'use client'
import { Button } from 'antd'
import React, { ReactNode } from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';


type ShapeType = "circle" | "round" | "default" | undefined;
const CustomButtonIcon = ({ text = '', shape, icon, iconDrawer, onClick }: { text?: String | undefined, shape?: ShapeType, icon?: ReactNode, iconDrawer?: Boolean, onClick?: () => void }) => {

    const buttonClass = clsx(styles['ant-btn'], {
        [styles['icon-drawer']]: iconDrawer
    });
    return (
        <Button shape={shape} icon={icon} className={buttonClass} onClick={onClick} >
            {text}
        </Button>
    )
}

export default CustomButtonIcon;