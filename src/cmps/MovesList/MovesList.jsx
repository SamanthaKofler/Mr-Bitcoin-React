import React from 'react';
import Moment from 'react-moment';
import './MovesList.scss';

export function MovesList(props) {
    return (
        <ul className="moves-list container">
            {!props.moves.length && <li>No transactions yet</li>}
            {props.moves.map(move =>
                <li key={move.at}>
                    {props.showTo && <p className="to">To: {move.to}</p>}
                    <p><i className="fab fa-btc"></i><span>{move.amount}</span></p>
                    <p className="at">{new Date(move.at).toLocaleString()}</p>
                </li>
            )}
        </ul>
    )
}
