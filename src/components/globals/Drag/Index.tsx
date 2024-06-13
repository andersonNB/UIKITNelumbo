
import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ListItemsDrag } from "./ListItemsDrag";
import { ItemDrag } from "./ItemDrag";
import ColorPicker from "../ColorPicker";
import styles from './styles.module.scss';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const QuoteList = React.memo(function QuoteList({ quotes }) {
    return <ListItemsDrag quotes={quotes} />;
});

export function CustomDragDrop() {

    const [finalColorSon, setFinalColorSon] = useState();
    const initial = ['Crítico', 'Alta', 'Media', 'Baja', 'Ejemplo',].map((content, index) => {
        const custom = {
            id: `id-${index}`,
            content: <ItemDrag content={content} />
        };
        return custom;
    });

    const [state, setState] = useState({ quotes: initial });
    const [newColor, setNewColor] = useState(0);


    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const quotes = reorder(
            state.quotes,
            result.source.index,
            result.destination.index
        );
        setState({ quotes });
        // 1.Setearle el color a la card que corresponda, dependiendo de donde la 
        // situen en el colorpicker
    }

    function handleColorChange(valueColor) {
        // console.log(valueColor.target.value)
        setNewColor(Number(valueColor.target.value));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {provided => (
                        <div 
                        className={styles['main-container']}
                        ref={provided.innerRef} 
                        {...provided.droppableProps} 
                        style={{ backgroundColor: finalColorSon, height:'auto' }}>
                            <ColorPicker onChange={handleColorChange} newColor={newColor} setFinalColorSon={setFinalColorSon} />
                            <QuoteList quotes={state.quotes} />
                            {provided.placeholder}
                        </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}