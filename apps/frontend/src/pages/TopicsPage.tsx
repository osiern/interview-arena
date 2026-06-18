import TopicCard from '../components/TopicCard';
import { questionsByTopic } from '../data/questions';
import { topics } from '../data/topics';
import { useProgressStore } from '../store/progressStore';
import styles from './TopicsPage.module.scss';

function TopicsPage() {
    const progressByTopic = useProgressStore(
        state => state.progressByTopic,
    );

    const completedQuestionsCount =
        Object.values(progressByTopic)
            .flat()
            .length;

    const totalQuestionsCount =
        Object.values(questionsByTopic)
            .flat()
            .length;

    const totalProgressPercent =
        totalQuestionsCount > 0
            ? Math.round(
                (
                    completedQuestionsCount /
                    totalQuestionsCount
                ) * 100,
            )
            : 0;

    return (
        <main className={styles.container}>
            <h1>Interview Arena</h1>

            <h2>Общий прогресс</h2>

            <p>
                Изучено {completedQuestionsCount}
                {' '}
                из
                {' '}
                {totalQuestionsCount}
            </p>

            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{
                        width: `${totalProgressPercent}%`,
                    }}
                />
            </div>

            <p>{totalProgressPercent}%</p>

            <h2>Темы для подготовки</h2>

            <ul className={styles.list}>
                {topics.map(topic => {
                    const completedCount =
                        progressByTopic[topic.slug]?.length ?? 0;

                    const totalCount =
                        questionsByTopic[topic.slug]?.length ?? 0;

                    return (
                        <li
                            key={topic.slug}
                            className={styles.topic}
                        >
                            <TopicCard
                                title={topic.title}
                                slug={topic.slug}
                            />

                            <p>
                                {completedCount} / {totalCount}
                            </p>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: `${totalCount > 0
                                            ? (completedCount / totalCount) * 100
                                            : 0
                                            }%`,
                                    }}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default TopicsPage;