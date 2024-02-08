import Button from '../UI/Button/Button';
import Body from '../UI/Body/Body';
import Heading from '../Heading/Heading';

const Welcome = (props) => {

  const buttonClickedHandler = () => {
    props.onStartQuiz()
  }

  return(
    <Body>
      <Heading>WHO MADE IT?</Heading>
      <h3>Instructions</h3>
      <p>You will be presented with a car manufacturer brand and a list of countries, and you'd have to guess the country origin of this brand</p>
      <p className='highscore'>Your high score: {props.highScore}</p>
      <div className='begin-button'>
        <Button
          onClick={buttonClickedHandler}
        >
          Begin!
        </Button> 
      </div>
    </Body>
  )
}

export default Welcome;