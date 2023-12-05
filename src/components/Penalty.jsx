import React, { useState } from 'react';
import './App.css';

function Penalty() {
    const [targetPosition, setTargetPosition] = useState({ top: '50%', left: '50%' });

    const handleShoot = () => {
        
    };

    return (
        <div className="App">
            <img src="goal.png" alt="Football Goal" />
            <div className="target" style={targetPosition}></div>
            <button onClick={handleShoot}>Shoot</button>
        </div>
    );
}

export default Penalty;
