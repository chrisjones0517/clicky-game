import React from 'react';

import './Header.css';

const Header = (props) => {
    return (
        <div className="header container-fluid row">
            <div className="col-sm">
                <h2 id="logo-title" onClick={props.newGame}>Clicky Game</h2>
            </div>
            <div className="col-sm">
                <h2 className={props.style.myStyle}>{props.message}</h2>
            </div>
            <div className="col-sm">
                <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
            </div>
        </div>
    )
};

export default Header;