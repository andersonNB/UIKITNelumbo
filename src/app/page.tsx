'use client'
import CustomButtonIcon from "@/components/globals/ButtonIcon";
import styles from "./page.module.css";
import { DragOutlined, EditOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { CustomTable } from "@/components/globals/Table";
import CustomInput from "@/components/globals/Input";
import { Col, Row, Tag } from "antd";
import CustomCard from "@/components/globals/Cards";
import { CustomButtonText } from "@/components/globals/ButtonPrimary";
import { CustomInputNumber } from "@/components/globals/InputNumber";
import CustomDrawer from "@/components/globals/Drawer";
import CustomCheckBox from "@/components/globals/CheckBox";
import CustomSelect from "@/components/globals/Select";
import { CustomTag } from "@/components/globals/Tag";



const dataSource = [
  {
    key: '1',
    tags: ['Critico'],
    state: 'Active',
    address: <>
      <EditOutlined />
      <PoweroffOutlined />
    </>,
  },
  {
    key: '2',
    state: 'Active',
    address: <>
      <EditOutlined />
      <PoweroffOutlined />
    </>,
    tags: ['Medio'],
  },
  {
    key: '3',
    state: 'Active',
    address: <>
      <EditOutlined />
      <PoweroffOutlined />
    </>,
    tags: ['Bajo'],
  },
];

const columns = [
  {
    title: 'Prioridad'.toUpperCase(),
    dataIndex: 'tags',
    key: 'tags',
    width: 390,
    render: (tags: string[]) => (
      <span>
        {tags?.map((tag) => {

          return (
            <CustomTag key={tag} tag={tag} />
          );
        })}
      </span>
    ),
  },
  {
    title: 'Estado'.toUpperCase(),
    dataIndex: 'state',
    key: 'state',
    width: 150,
  },
  {
    title: 'Acciones'.toUpperCase(),
    dataIndex: 'address',
    key: 'address',
    width: 150,
  },
];

// const NestedChild= ({children})=>{
//   return <div>{children}</div>
// }

const managementTickets = ['Crear', 'Modificar', 'Escarlar', 'Cerrar', 'Re abrir', 'Concluir', 'Reasignar', 'Eliminar', 'Exportar']
const managementFramework = ['Crear', 'Eliminar', 'Lectura']

const optionSelect = [
  { value: 'analista_jr', label: 'Analista Jr' },
  { value: 'analista_jr', label: 'Analista Senior' },
  { value: 'analista_jr', label: 'Analista Master' },
  { value: 'analista_jr', label: 'Moderador' },
  { value: 'analista_jr', label: 'Manejador BD' },
  { value: 'analista_jr', label: 'Mesa de Ayuda' }
]

export default function Home() {
  return (
    <main className={styles.main}>

      <Row gutter={[9, 9]} >
        <Col span={8}>
          <CustomButtonIcon shape='circle' icon={<UserOutlined />} />
          <CustomButtonText text='Agregar' width={true} />
        </Col>
        <Col span={8}>
          <CustomTable dataSource={dataSource} columns={columns} />
        </Col>
        <Col span={8}>
          <CustomInput />
          <br />
          <CustomInputNumber suffix='dias' />
          <CustomInputNumber suffix='horas' />
          <CustomInputNumber suffix='min' />
          <CustomInputNumber suffix='segs' />
        </Col>
        <Col span={8} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <CustomCard icon={<UserOutlined />} text='Usuarios' />
          <CustomCard icon={<UnorderedListOutlined />} text='Roles y Permisología' />
          <CustomCard icon={<DragOutlined />} text='Clasificaciones' />
          <CustomCard icon={<DragOutlined />} text='Tipo' />
        </Col>
        <Col span={8}>
          <CustomDrawer title='Agregar Prioridad' children={<span>Por defecto, la nueva prioridad tendrá el menor peso de la lista de prioridades</span>} />
        </Col>
        <Col span={8}>
          <CustomCheckBox title='Gestión de tickets' amountChecks={managementTickets} />
          <CustomCheckBox title='Gestión de plantilla' amountChecks={managementFramework} />
        </Col>

        <Col span={8}>
          <CustomSelect title='Perfil de usuario' optionSelect={optionSelect} />
        </Col>
      </Row>
    </main>
  );
}
