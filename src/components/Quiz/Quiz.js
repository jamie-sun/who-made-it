import { useRef, useState } from 'react';
import Body from '../UI/Body/Body'
import CarData from '../../data/CarData.json';
import CountryData from '../../data/CountryData.json';
import getQuestionAnswer from '../Util/getQuestionAnswer';
import QuizResults from './QuizResults/QuizResults';
import QuizContent from './QiuzContent/QiuzContent';

const Quiz = (props) => {

  const [score, setScore] = useState(0);
  const [carList, setCarList] = useState(CarData);
  const [showResultScreen, setShowResultScreen] = useState(false);
  let highScore = useRef(0);

  const questionAnswer = getQuestionAnswer(carList, CountryData);

  const hasAnsweredHandler = (userCorrectAnswer, askedQuestion) => {
    if (userCorrectAnswer) {
      const newCarList = { ...carList };
      delete newCarList[askedQuestion];
      setScore(score + 1)
      if (Object.keys(newCarList).length > 0) {
        setCarList(newCarList);
      }
      else {
        setShowResultScreen(true)
      }
    }
    else {
      setShowResultScreen(true)
    }
  }

  const playAgainHandler = () => {
    compareHighScore();
    setCarList(CarData);
    setShowResultScreen(false);
    setScore(0);
  }
  const exitButtonHandler = () => {
    compareHighScore();
    props.exit(highScore.current);
  }
  const compareHighScore = () => {
    if (score > highScore.current) {
      highScore.current = score;
    }
  }

  return(
    showResultScreen ? 
    <Body>
      <QuizResults 
        score={score}
        playAgain={playAgainHandler}
        exitButton={exitButtonHandler}
      />
    </Body> :
    <Body>
      <QuizContent
        questionAnswer={questionAnswer}
        hasAnswered={hasAnsweredHandler}
        score={score}
      />
    </Body>
  )
}

export default Quiz;