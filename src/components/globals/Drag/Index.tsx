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

export function CustomDragDrop() {
    const initial = ['Crítico', 'Alta', 'Media', 'Baja', 'Ejemplo'].map((content, index) => {
        const custom = {
            id: `id-${index}`,
            content: content,
            color: getColorFromIndex(index, 5) // Assign initial color based on the position and total items
        };
        return custom;
    });

    const [state, setState] = useState({ quotes: initial });
    const [showColor, setShowColor] = useState(false);

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
            color: getColorFromIndex(index, quotes.length)
        }));

        setState({ quotes: updatedQuotes });
    }

    function addItem() {
        const newItem = {
            id: `id-${state.quotes.length}`,
            content: `Nuevo Item ${state.quotes.length + 1}`,
        };

        const updatedQuotes = [...state.quotes, newItem].map((quote, index) => ({
            ...quote,
            color: getColorFromIndex(index, state.quotes.length + 1) // Assign color based on new index and total items
        }));

        setState({ quotes: updatedQuotes });
    }

    function getColorFromIndex(index, totalItems) {
        const value = Math.min(100, Math.max(0, (index / (totalItems - 1)) * 100));
        return getColorFromValue(value);
    }

    function getColorFromValue(value) {
        const gradientColors = [
            { stop: 0, color: '#FF4D4F' },
            { stop: 25, color: '#FAAD14' },
            { stop: 50, color: '#FFDD00' },
            { stop: 75, color: '#31C462' },
            { stop: 100, color: '#75DBBC' },
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


    const QuoteList = React.memo(function QuoteList({ quotes, showColor }) {
        return <ListItemsDrag quotes={quotes} showColor={showColor} />;
    });


    const onSetColorClick = () => {
        setShowColor(!showColor);
    }

    return (
        <div>
            <button onClick={addItem}>Agregar Item</button>
            <button onClick={onSetColorClick}>Setear Color</button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div
                            className={styles['main-container']}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{ height: 'auto !important' }}
                        >
                            <ColorPicker />
                            <QuoteList quotes={state.quotes} showColor={showColor} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
