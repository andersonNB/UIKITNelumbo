'use client'
import Image from "next/image";
import { Col, Row } from "antd";
import CustomButtonIcon from "@/components/globals/ButtonIcon";
import styles from "./page.module.css";
import { UserOutlined } from "@ant-design/icons";
import { CustomTable } from "@/components/globals/Table";
import CustomInput from "@/components/globals/Input";
import CustomCard from "@/components/globals/Cards";
import { CustomButtonText } from "@/components/globals/ButtonPrimary";
import { CustomInputNumber } from "@/components/globals/InputNumber";
import CustomDrawer from "@/components/globals/Drawer";
import CustomCheckBox from "@/components/globals/CheckBox";
import CustomSelect from "@/components/globals/Select";
import { CustomTag } from "@/components/globals/Tag";
import { BreadcrumbComponent } from "@/components/globals/Breadcrumb";
import { CustomDragDrop } from "@/components/globals/Drag/Index";
import iconUser from "@/assets/icons/icon_hero_users.svg";
import unOrderedList from "@/assets/icons/icon_ant_unordered_list_outlined.svg";
import ArrowInside from "@/assets/icons/icon_carbon_router.svg";
import iconEdit from "@/assets/icons/icon_edit.svg"
import powerOn from "@/assets/icons/icon_powerOn.svg";




const dataSource = [
  {
    key: '1',
    tags: ['Critico'],
    state: 'Active',
    address: <>
      <Image src={iconEdit} alt="Edit table" />
      <Image src={powerOn} alt="Power on Button table" />
    </>,
  },
  {
    key: '2',
    state: 'Active',
    address: <>
      <Image src={iconEdit} alt="Edit table" />
      <Image src={powerOn} alt="Power on Button table" />
    </>,
    tags: ['Medio'],
  },
  {
    key: '3',
    state: 'Active',
    address: <>
      <Image src={iconEdit} alt="Edit table" />
      <Image src={powerOn} alt="Power on Button table" />
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
  { value: '1', label: 'Analista Jr' },
  { value: '2', label: 'Analista Senior' },
  { value: '3', label: 'Analista Master' },
  { value: '4', label: 'Moderador' },
  { value: '5', label: 'Manejador BD' },
  { value: '6', label: 'Mesa de Ayuda' }
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
          <CustomTable dataSource={dataSource} columns={columns} pagination={false} />
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
          <CustomCard icon={iconUser} text='Usuarios'  altIcon='Icono de usuario para las cards'/>
          <CustomCard icon={unOrderedList} text='Roles y Permisología' altIcon='Icono lista' />
          <CustomCard icon={ArrowInside} text='Clasificaciones' altIcon='Icono clasificaciones' />
          <CustomCard icon={ArrowInside} text='Tipo' altIcon='Icono tipo' />
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

        <Col span={8}>
          <BreadcrumbComponent items={[
            {
              title: 'Home',
              path:'/'
            },
            {
              title: 'Application Center',
              path:'/aplication-center'
            },
            {
              title: 'Application List',
              path:'/aplication-list'
            },
            {
              title: 'An Application',
              path:'/an-application'
            },
          ]} />
        </Col>

        <Col span={24} style={{height:'auto'}}>
        <CustomDragDrop />
        </Col>
      </Row>
    </main>
  );
}
