// components/CirclePoints.js
import React from 'react';

const CirclePoints = ({ numPoints, numSteps = 5 }: { numPoints: number, numSteps: number }) => {
    const radius = 100;
    const circle = 50;

    return (
        <div
            style={{
                position: 'relative',
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                margin: '50px auto',
            }}
        >
            {Array.from({ length: numPoints }).map((_, i) => {
                const angle = (i * 2 * Math.PI) / numPoints;
                const xEnd = radius + radius * Math.cos(angle);
                const yEnd = radius + radius * Math.sin(angle);

                return (
                    <React.Fragment key={i}>
                        <div
                            style={{
                                position: 'absolute',
                                width: `${circle}px`,
                                height: `${circle}px`,
                                backgroundColor: 'black',
                                borderRadius: '50%',
                                top: `${yEnd}px`,
                                left: `${xEnd}px`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        />

                        {Array.from({ length: numSteps }).map((_, j) => {
                            const progress = (j + 1) / numSteps;
                            const xStep = radius + progress * (xEnd - radius);
                            const yStep = radius + progress * (yEnd - radius);

                            return (
                                <div
                                    key={`${i}-${j}`}
                                    style={{
                                        position: 'absolute',
                                        width: `${circle - j * 3}px`, // Points plus petits en taille
                                        height: `${circle - j * 3}px`,
                                        backgroundColor: 'gray',
                                        borderRadius: '50%',
                                        top: `${yStep}px`,
                                        left: `${xStep}px`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default CirclePoints;
