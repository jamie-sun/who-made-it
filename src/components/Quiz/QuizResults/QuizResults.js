import Heading from '../../Heading/Heading';
import Button from '../../UI/Button/Button';

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
      <p>Congratulations! You scored: {props.score}</p>
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
  )
}

export default QuizResults;