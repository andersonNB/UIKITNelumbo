
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


    const getColor = (index) => {
        const colors = [
            '#FF0000', // Red
            '#FFA500', // Orange
            '#FFDD00', // Yellow
            '#00FF00', // Green
            '#00FFFF'  // Cyan
        ];
        return colors[index % colors.length];
    };
    const [finalColorSon, setFinalColorSon] = useState();
    const initial = ['Crítico', 'Alta', 'Media', 'Baja', 'Ejemplo',].map((content, index) => {
        const custom = {
            id: `id-${index}`,
            content: <ItemDrag content={content} />,
            color: getColor(index),
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


        const updatedQuotes = quotes.map((quote, index) => ({
            ...quote,
            color: getColor(index) // Update color based on new index
        }));

        setState({ quotes: updatedQuotes });
    }

    function handleColorChange(valueColor) {
        // console.log(valueColor.target.value)
        setNewColor(Number(valueColor.target.value));
    }

    // console.log({state});
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {provided => (
                    <div
                        className={styles['main-container']}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{  height: '280px !important', background:'#ccc' }}>
                        <ColorPicker onChange={handleColorChange} newColor={newColor} setFinalColorSon={setFinalColorSon} />
                        <QuoteList quotes={state.quotes} />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}