import {Link, useParams} from 'react-router-dom';

import QuestionCard from '../components/QuestionCard';
import {questionsByTopic} from '../data/questions';
import styles from './TopicPage.module.scss';

function TopicPage() {
    const { topicId } = useParams();

    const questions = topicId ? questionsByTopic[topicId] : [];

    return (
        <main className={styles.container}>
            <Link to="/">← Все темы</Link>
            <h1>{topicId}</h1>

            <h2>Вопросы</h2>

            <ul className={styles.list}>
                {questions.map((question) => (
                    <QuestionCard
                        key={question.id}
                        title={question.title}
                        answer={question.answer}
                        difficulty={question.difficulty}
                    />
                ))}
            </ul>
        </main>
    );
}

export default TopicPage;
