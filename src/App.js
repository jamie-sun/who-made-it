import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome';
import Quiz from './components/Quiz/Quiz';

import './App.css';

function App() {

  const [quizState, setQuizStatus] = useState('welcome');
  const [highScore, setHighScore] = useState(0);
  
  const startQuizHandler = () => {
    setQuizStatus('quizInProgress');
  }
  
  const exitHandler = (comparedHighScore) => {
    if (comparedHighScore > highScore) {
      setHighScore(comparedHighScore);
    }
    setQuizStatus('welcome');
  }

  return (
    <div className="App">
      <div className='quiz-container'>
        {quizState === "welcome" && 
          <Welcome 
            onStartQuiz={startQuizHandler}
            highScore={highScore}
          />}
        {quizState === "quizInProgress" && 
          <Quiz 
            exit={exitHandler} 
            highScore={highScore}
          />}
      </div>
    </div>
  );
}

export default App;
