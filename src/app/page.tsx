'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { CustomTag } from "@/components/globals/Tag";
import iconEdit from "@/assets/icons/icon_edit.svg"
import powerOn from "@/assets/icons/icon_powerOn.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Col, Row } from "antd";
import CustomModal from "@/components/user/Modal/Index";




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
const client = new QueryClient();
export default function Home() {


  return (

    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <Row gutter={[9, 9]} >
          <Col span={8}>
            <CustomModal />
          </Col>
        </Row>
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
