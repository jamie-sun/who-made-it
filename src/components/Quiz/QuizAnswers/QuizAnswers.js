import Button from '../../UI/Button/Button';
import CountryData from '../../../data/CountryData.json';
import "./QuizAnswers.css";

const QuizAnswers = (props) => {

  const askedQuestion = props.questionAnswer[0][0];
  const correctAnswer = props.questionAnswer[0][1];
  const answerList = props.questionAnswer[1];

  const buttonClickedHandler = (key) => {
    const userSelectedAnswer = key;
    if (userSelectedAnswer === correctAnswer) {
      props.hasAnswered(true, askedQuestion);
    }
    else {
      props.hasAnswered(false, askedQuestion);
    }
  }

  return(
    <div className='quiz-answers-wrapper'>
      {answerList.map((key) => 
        <Button
          onClick={() => buttonClickedHandler(key)}
          key={key}
        >
          <img src={CountryData[key].image} alt="" />
          {CountryData[key].name}
        </Button>
      )}
    </div>
  )
}

export default QuizAnswers;