'use client'
import React from 'react';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxProps } from 'antd';
import styles from './styles.module.scss';

const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const CustomCheckBox = ({ title, amountChecks }: { title: String, amountChecks: String[] }) => {

    return (
        <Row gutter={[10, 10]} className={styles['custom-checkbox']}>
            <Col>
                <h3>{title?.toUpperCase()}</h3>
            </Col>
            {amountChecks?.length && amountChecks.map((check: String, index: any) => {

                return (
                    <Col key={index}>
                        <Checkbox onChange={onChange}>
                            {check}
                        </Checkbox>
                    </Col>
                )
            })}
        </Row>
    )
};

export default CustomCheckBox;