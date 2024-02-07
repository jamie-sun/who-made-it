import CarData from '../../../data/CarData.json';
import Heading from '../../Heading/Heading';

const QuizQuestion = (props) => {

  const askedQuestion = props.questionAnswer[0][0];

  return(
    <div>
      <Heading>{CarData[askedQuestion].name}</Heading>
      <img src={CarData[askedQuestion].image} alt="" />
    </div>
  )
}

export default QuizQuestion;