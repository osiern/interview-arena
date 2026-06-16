import TopicCard from '../components/TopicCard';

const topics = [
    'JavaScript',
    'TypeScript',
    'React',
    'Playwright',
    'REST API',
    'SQL',
    'Docker',
    'Git',
];

function TopicsPage() {
    return (
        <main>
            <h1>Interview Arena</h1>
            <h2>Темы для подготовки</h2>

            <ul>
                {topics.map(topic => (
                    <TopicCard
                        key={topic}
                        title={topic}
                    />
                ))}
            </ul>
        </main>
    );
}

export default TopicsPage;