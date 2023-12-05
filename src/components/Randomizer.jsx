import React, { useState } from 'react';

function Randomizer() {
    const [scenario, setScenario] = useState(null);

    const scenarios = [
        {
            description: "Top left",
            targetX: 10,
            targetY: 23,
        },
        {
            description: "Bottom left",
            targetX: 12,
            targetY: 70,
        },
        {
            description: "Top right",
            targetX: 90,
            targetY: 22,
        },
        {
            description: "Bottom right",
            targetX: 89,
            targetY: 68,
        },
        {
            description: "Middle",
            targetX: 50,
            targetY: 50,
        },

    ];

    const handleRandomize = () => {
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        setScenario(scenarios[randomIndex]);
    };

    return (
        <div>
            <div className="image-container">
                <div className="goal-container">
                    <img
                        src="/football_goal.png"
                        alt="Football Goal"
                        style={{
                            width: '600px',
                            height: 'auto',
                        }}
                    />
                    {scenario && (
                        <img
                            src="/football.png"
                            alt="Football"
                            className="football-image"
                            style={{
                                width: '30px',
                                height: '30px',
                                position: 'absolute',
                                top: `${scenario.targetY}%`,
                                left: `${scenario.targetX}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    )}
                </div>
            </div>

            {scenario ? (
                <div>
                    <p>{scenario.description}</p>
                    <button onClick={handleRandomize}>Randomize Again</button>
                </div>
            ) : (
                <button onClick={handleRandomize}>Randomize Scenario</button>
            )}
        </div>
    );
}

export default Randomizer;
