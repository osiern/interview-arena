import { useState } from 'react';
import styles from './QuestionCard.module.scss';

type QuestionCardProps = {
    title: string;
    answer: string;
    difficulty: string;
};

function QuestionCard({ title, answer, difficulty }: QuestionCardProps) {
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
        </li>
    );
}

export default QuestionCard;
