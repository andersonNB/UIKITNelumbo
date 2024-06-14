import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ColorPicker from "../ColorPicker";
import styles from './styles.module.scss';
import { ListItemsDrag } from "./ListItemsDrag";

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
    const colors = [
        '#FF0000', // Red
        '#FFA500', // Orange
        '#FFDD00', // Yellow
        '#00FF00', // Green
        '#00FFFF'  // Cyan
    ];

    const initial = ['Crítico', 'Alta', 'Media', 'Baja', 'Ejemplo'].map((content, index) => {
        const custom = {
            id: `id-${index}`,
            content: content,
            color: colors[index % colors.length] // Assign initial color based on the position
        };
        return custom;
    });

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

        const updatedQuotes = quotes.map((quote, index) => ({
            ...quote,
            color: getColorFromIndex(index) // Update color based on new index
        }));

        setState({ quotes: updatedQuotes });
    }

    function addItem() {
        console.log(state.quotes.length)
        const newItem = {
            id: `id-${state.quotes.length}`,
            content: `Nuevo Item ${state.quotes.length + 1}`,
            color: getColorFromIndex(state.quotes.length) // Assign color based on new index
        };

        const updatedQuotes = [...state.quotes, newItem];
        setState({ quotes: updatedQuotes });
    }

    function getColorFromIndex(index, totalItems) {
        // const value = (index / (state.quotes.length - 1)) * 100;
        const value = Math.min(100, Math.max(0, (index / (state.quotes.length - 1)) * 100));
        console.log({value})
        return getColorFromValue(value);
    }

    function getColorFromValue(value) {
        const gradientColors = [
            { stop: 0, color: '#FF0000' },
            { stop: 25, color: '#FFA500' },
            { stop: 50, color: '#FFDD00' },
            { stop: 75, color: '#00FF00' },
            { stop: 100, color: '#00FFFF' },
        ];

        let color = '';
        for (let i = 0; i < gradientColors.length - 1; i++) {
            const current = gradientColors[i];
            const next = gradientColors[i + 1];
            if (value >= current.stop && value <= next.stop) {
                const range = next.stop - current.stop;
                const position = (value - current.stop) / range;
                color = interpolateColor(current.color, next.color, position);
                break;
            }
        }
        return color;
    }

    function interpolateColor(color1, color2, factor) {
        const result = color1.slice(1).match(/.{2}/g).map((hex, i) => {
            const color1Val = parseInt(hex, 16);
            const color2Val = parseInt(color2.slice(1).match(/.{2}/g)[i], 16);
            const val = Math.round(color1Val + factor * (color2Val - color1Val)).toString(16);
            return val.padStart(2, '0');
        }).join('');
        return `#${result}`;
    }

    return (
        <div>
            <button onClick={addItem}>Agregar Item</button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div
                            className={styles['main-container']}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{ height: 'auto !important' }}
                        >
                            <ColorPicker onChange={() => {}} newColor={0} setFinalColorSon={() => {}} />
                            <QuoteList quotes={state.quotes} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
