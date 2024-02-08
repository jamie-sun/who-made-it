import CarData from "../../../data/CarData.json";
import CountryData from '../../../data/CountryData.json';
import Heading from "../../Heading/Heading";
import Button from '../../UI/Button/Button';

const QuizContent = (props) => {

  const askedQuestion = props.questionAnswer[0][0];
  const correctAnswer = props.questionAnswer[0][1];
  const answerList = props.questionAnswer[1];

  const buttonClickedHandler = (key) => {
    const userSelectedAnswer = key;
    if (userSelectedAnswer === correctAnswer) {
      props.hasAnswered(true, askedQuestion);
    } else {
      props.hasAnswered(false, askedQuestion);
    }
  };

  return (
    <div>
      <div>
        <Heading>{CarData[askedQuestion].name}</Heading>
        <img src={CarData[askedQuestion].image} alt="" />
      </div>
      <h4>Score: {props.score}</h4>
      <div className="quiz-answers-wrapper">
        {answerList.map((key) => (
          <Button onClick={() => buttonClickedHandler(key)} key={key}>
            <img src={CountryData[key].image} alt="" />
            {CountryData[key].name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuizContent;
