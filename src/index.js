import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';

ReactDOM.render(<Card
                  title="Guías tecnicas"
                  description="Aprende ejercicios callejeros y calistenia increíbles"
                  img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                  leftColor="#A74CF2"
                  rightColor="#617BFB"
                />,
  document.getElementById('root')
);

