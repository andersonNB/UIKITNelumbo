import React from 'react'
import { Row } from 'antd'
import Image from 'next/image';
import { Draggable } from '@hello-pangea/dnd';
import styles from './styles.module.scss';
import iconDrag from '@/assets/icons/icon_drag_handle_line.svg';


export const ListItemsDrag = ({ quotes, showColor }: { quotes: { content: String }[], showColor: Boolean }) => {


  function Quote({ quote, index, showColor }) {

    return (
      <Draggable draggableId={quote.id} index={index}>
        {provided => (
          // console.log(provided),                  
          <div
            className={styles['container-list']}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{ ...provided.draggableProps.style, backgroundColor: showColor === false ? '#FFFFFF' : quote.color }}
          >
            <Image src={iconDrag} alt='icono Dragwer' />
            {quote.content}
          </div>
        )}
      </Draggable>
    );
  }

  return (

    <Row>
      {quotes?.length > 0 && quotes.map((quote, index) => {
        return <Quote quote={quote} index={index} key={quote.id} showColor={showColor} />
      })}
    </Row>
  )
}
