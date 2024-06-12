'use client'
import { Table } from 'antd';
import React from 'react'
import type { TablePaginationConfig } from 'antd/es/table';



export const CustomTable = ({ dataSource, columns, pagination }: { dataSource?: [], columns?: [], pagination: TablePaginationConfig }) => {
  return (
    <Table dataSource={dataSource} columns={columns} pagination={pagination} />
  )
}