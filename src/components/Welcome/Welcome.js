import Button from '../UI/Button/Button';
import Body from '../UI/Body/Body';
import Heading from '../Heading/Heading';

const Welcome = (props) => {

  const buttonClickedHandler = () => {
    props.onStartQuiz()
  }

  return(
    <Body>
      <Heading>Who made it?</Heading>
      <h4>Instructions</h4>
      <p>You will be presented with a car manufacturer brand and a list of countries, and you'd have to guess the country origin of this brand</p>
      <p>Your high score: {props.highScore}</p>
      <Button
        onClick={buttonClickedHandler}
      >
        Begin!
      </Button> 
    </Body>
  )
}

export default Welcome;