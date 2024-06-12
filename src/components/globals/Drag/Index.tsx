import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ListItemsDrag } from "./ListItemsDrag";
import { ItemDrag } from "./ItemDrag";


const initial = ['Crítico','Alta','Media','Baja','Ejemplo'].map((content,index) => {
    const custom = {
        id: `id-${index}`,
        content: <ItemDrag content={content} />
    };
    return custom;
});

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
    const [state, setState] = useState({ quotes: initial });

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
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>                    
                        <QuoteList quotes={state.quotes} />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<CustomDragDrop />, rootElement);