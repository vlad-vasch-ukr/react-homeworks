import React from 'react';
import './Square.scss';
import { useGameStore } from '../../context';

export default function Square({ value, onClick }) {
    const classes = ['btn'];
    const [state] = useGameStore();

    if (value || state.winner) {
        classes.push('disabled');
    }

    return (
        <button className={classes.join(' ')} onClick={onClick} disabled={value || state.winner}>
            {value}
        </button>
    );
}