import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Option.css';

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    let className = "option";
    if (quizState.answerSelected) {
        if (option === answer) {
            className += " correct";
        } else if (option === quizState.selectedOption && option !== answer) {
            className += " wrong"; 
        } else {
            className += " not-selected";
        }
    }

    const handleClick = () => {
        selectOption(option);
        dispatch({ type: 'SELECTED_OPTION', payload: option });
    };

    return (
        <div className={className} onClick={handleClick}>
            <p>{option}</p>
        </div>
    );
}

export default Option;
