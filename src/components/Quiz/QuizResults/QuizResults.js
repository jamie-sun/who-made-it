import Heading from '../../Heading/Heading';
import Button from '../../UI/Button/Button';
import '../QuizResults/QuizResults.css';

const QuizResults = (props) => {

  const playAgainButtonHandler = () => {
    props.playAgain();
  }
  const exitButtonHandler = () => {
    props.exitButton();
  }

  return(
    <div>
      <Heading>Game Over</Heading>
      <p className='congrats-score'>Congratulations! You scored: {props.score}</p>
      <div className='results-buttons'>
        <Button
          onClick={playAgainButtonHandler}
        >
          Play Again
        </Button>
        <Button
          onClick={exitButtonHandler}
        >
          Exit
        </Button>
      </div>
    </div>
  )
}

export default QuizResults;