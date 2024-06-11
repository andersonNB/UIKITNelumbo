'use client'
import { Table } from 'antd';
import React from 'react'



export const CustomTable = ({dataSource, columns}) => {
  return (
      <Table dataSource={dataSource} columns={columns} />
    )
}