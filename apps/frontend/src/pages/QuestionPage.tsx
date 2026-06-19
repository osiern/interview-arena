import {Link, useParams} from 'react-router-dom';

import {questionsByTopic} from '../data/questions';

function QuestionPage() {
    const {topicId, questionId} = useParams();

    const questions = topicId
        ? questionsByTopic[topicId] ?? []
        : [];

    const question = questions.find(
        item => item.id === questionId,
    );

    if (!question) {
        return (
            <main>
                <h1>Вопрос не найден</h1>

                <Link to="/">
                    На главную
                </Link>
            </main>
        );
    }

    return (
        <main>
            <Link to={`/topic/${topicId}`}>
                ← Назад к вопросам
            </Link>

            <h1>{question.title}</h1>

            <p>
                Сложность:
                {' '}
                {question.difficulty}
            </p>

            <hr />

            <p>{question.answer}</p>
        </main>
    );
}

export default QuestionPage;