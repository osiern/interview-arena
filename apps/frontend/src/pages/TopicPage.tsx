import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { questionsByTopic } from '../data/questions';
import styles from './TopicPage.module.scss';
import { useProgressStore } from '../store/progressStore';

function TopicPage() {
    const { topicId } = useParams();

    const [search, setSearch] =
        useState('');

    const questions = topicId ? questionsByTopic[topicId] : [];

    const [difficulty, setDifficulty] =
        useState('all');

    const filteredQuestions =
        questions.filter(question => {
            const matchesSearch =
                question.title
                    .toLowerCase()
                    .includes(
                        search.toLowerCase(),
                    );

            const matchesDifficulty =
                difficulty === 'all' ||
                question.difficulty.toLowerCase() ===
                difficulty;

            return (
                matchesSearch &&
                matchesDifficulty
            );
        });

    const progressByTopic =
        useProgressStore(
            state => state.progressByTopic,
        );

    const completeQuestion =
        useProgressStore(
            state => state.completeQuestion,
        );

    const completedQuestionIds =
        topicId
            ? progressByTopic[topicId] ?? []
            : [];

    const completedCount = completedQuestionIds.length;
    const totalCount = questions.length;
    const progressPercent =
        totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const handleCompleteQuestion = (
        questionId: string,
    ) => {
        if (!topicId) {
            return;
        }

        completeQuestion(
            topicId,
            questionId,
        );
    };

    return (
        <main className={styles.container}>
            <Link to="/">← Все темы</Link>

            <h1>{topicId}</h1>

            <p>
                Пройдено: {completedCount} из {totalCount}
            </p>

            <progress
                value={completedCount}
                max={totalCount}
            />

            <p>{progressPercent}%</p>

            <input
                type="text"
                placeholder="Поиск вопроса"
                value={search}
                onChange={event =>
                    setSearch(
                        event.target.value,
                    )
                }
            />

            <select
                value={difficulty}
                onChange={event =>
                    setDifficulty(
                        event.target.value,
                    )
                }
            >
                <option value="all">
                    Все
                </option>

                <option value="junior">
                    Junior
                </option>

                <option value="middle">
                    Middle
                </option>

                <option value="senior">
                    Senior
                </option>
            </select>

            <h2>Вопросы</h2>

            <ul className={styles.list}>
                {filteredQuestions.map(question => (
                    <QuestionCard
                        key={question.id}
                        id={question.id}
                        title={question.title}
                        answer={question.answer}
                        difficulty={question.difficulty}
                        isCompleted={completedQuestionIds.includes(
                            question.id,
                        )}
                        onComplete={handleCompleteQuestion}
                    />
                ))}
            </ul>
        </main>
    );
}

export default TopicPage;