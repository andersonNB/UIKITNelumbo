'use client'
import React, { ReactNode, useState } from 'react';
import { Button, Col, Drawer, Row } from 'antd';
import styles from './styles.module.scss';
import CustomButtonIcon from '../ButtonIcon';
import { CloseCircleOutlined } from '@ant-design/icons';
import { CustomButtonText } from '../ButtonPrimary';

const CustomDrawer = ({ title, children }: { title: String, children: ReactNode | React.ReactElement<any, any> }) => {
  const [open, setOpen] = useState(false);

  const semanticStructureStyle = { header: { display: 'none' }, footer: { border: 'none' } };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open Drawer
      </Button>
      <Drawer open={open} styles={semanticStructureStyle} footer={<CustomButtonText text='Agregar' buttonDrawer={true} />} >
        <Row gutter={[1, 8]}>
          <Col span={24} className={styles['title-column']} >
            <h2>{title}</h2>
            <CustomButtonIcon shape={{ shape: 'circle' }} icon={<CloseCircleOutlined />} onClick={onClose} iconDrawer={true} />
          </Col>
          <Col span={24}>
            {children}
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default CustomDrawer;