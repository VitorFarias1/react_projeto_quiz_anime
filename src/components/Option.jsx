import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Option.css';

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={`option ${
        quizState.answerSelected && option === answer ? "correct" : "not-selected"
        } ${
            quizState.answerSelected && option !== answer ? "wrong" : "not-selected"
        }`} onClick={() => selectOption(option)} >
        <p>{option}</p>
    </div>
  )
}

export default Option