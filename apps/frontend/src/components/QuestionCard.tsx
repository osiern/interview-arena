import {useState} from 'react';

import styles from './QuestionCard.module.scss';

type QuestionCardProps = {
    id: string;
    title: string;
    answer: string;
    difficulty: string;
    isCompleted: boolean;
    onComplete: (questionId: string) => void;
};

function QuestionCard({
    id,
    title,
    answer,
    difficulty,
    isCompleted,
    onComplete,
}: QuestionCardProps) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    return (
        <li className={styles.card}>
            <h3 className={styles.title}>{title}</h3>

            <span className={styles.difficulty}>{difficulty}</span>

            <button
                className={styles.button}
                onClick={() => {
                    setIsAnswerVisible(!isAnswerVisible);
                }}
            >
                {isAnswerVisible ? 'Скрыть ответ' : 'Показать ответ'}
            </button>

            {isAnswerVisible && <div className={styles.answer}>{answer}</div>}

            <button
                className={styles.button}
                disabled={isCompleted}
                onClick={() => {
                    onComplete(id);
                }}
            >
                {isCompleted ? 'Изучено' : 'Отметить изученным'}
            </button>
        </li>
    );
}

export default QuestionCard;