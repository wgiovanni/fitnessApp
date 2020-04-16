import React from 'react';
import Card from './Card.js';

function ExercisesList(props) {
    return (
        <div>
            {props.exercises.map((e) => {
                return (
                    <Card
                        key={e.id}
                        title={e.title}
                        description={e.description}
                        img={e.img}
                        leftColor={e.leftColor}
                        rightColor={e.rightColor}
                    />
                );
            })}
        </div>
    );
}

export default ExercisesList;