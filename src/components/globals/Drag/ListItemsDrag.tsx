import React from 'react'
import { Col, Row } from 'antd'
import { Draggable } from '@hello-pangea/dnd';
import styles from './styles.module.scss';

export const ListItemsDrag = ({ quotes }:{quotes:{content:String}[]}) => {

    // console.log(quotes);
    
    function Quote({ quote, index }) {
        return (
          <Draggable draggableId={quote.id} index={index}>
            {provided => (
              // console.log(provided),
              <div 
              className={styles['container-list']}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {quote.content}
              </div>
            )}
          </Draggable>
        );
      }

    return (

        <Row>
            {quotes?.length > 0 && quotes.map((quote, index) => {
                return  <Quote quote={quote} index={index} key={quote.id} />
            })}
        </Row>
    )
}
