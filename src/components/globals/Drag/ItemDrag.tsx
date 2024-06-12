import React from 'react'
import { Col, Row } from 'antd'
import Image from 'next/image'
import iconDrag from '../../../assets/icons/icon_drag_handle_line.svg';
import styles from './styles.module.scss';

export const ItemDrag = ({ content }: { content: String }) => {
    return (
        <Row  className={styles.item} >
            <Col>
                <Image src={iconDrag} alt="Icon lista" />
            </Col>
            <Col>
                {content}
            </Col>
        </Row>
    )
}
