import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import CustomSelect from '@/components/globals/Select';
import styles from './styles.module.scss';


const optionSelect = [
  { value: '1', label: 'Analista Jr' },
  { value: '2', label: 'Analista Senior' },
  { value: '3', label: 'Analista Master' },
  { value: '4', label: 'Moderador' },
  { value: '5', label: 'Manejador BD' },
  { value: '6', label: 'Mesa de Ayuda' }
]

const propsStyleModal = { header: { fontWeight: 'bold', textAlign: 'center', paddingBottom: 15 } }

const CustomModal: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Perfil de Usuario"
        open={isModalOpen}
        footer={null}
        styles={propsStyleModal}
        width={400}
        onCancel={handleCancel}
        centered={true}
      >
        <Row gutter={[9, 30]}>
          <Col span={24}>
            <CustomSelect
              title='Seleccione el perfil del usuario'
              optionSelect={optionSelect}
              fullWidth={true}
            />
          </Col>
          <Col span={24} style={{ textAlign: 'center' }} >
            <Button className={styles.button} onClick={handleCancel} >Aceptar</Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CustomModal;