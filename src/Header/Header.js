import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header container-fluid">
            <div className="colDiv">
                <h2 id="logo-title" onClick={props.newGame}>Clicky Game</h2>
            </div>
            <div className="colDiv">
                <h2 className={props.style.myStyle}>{props.message}</h2>
            </div>
            <div className="colDiv">
                <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
            </div>
        </div>
    )
};

export default Header;