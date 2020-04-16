import React from 'react';
import Card from './Card.js';

const ExercisesList = ({exercises}) => (
    <div>
        {exercises.map((e) => {
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

export default ExercisesList;