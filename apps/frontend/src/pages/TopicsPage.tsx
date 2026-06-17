import TopicCard from '../components/TopicCard';

const topics = [
    {
        title: 'JavaScript',
        slug: 'javascript',
    },
    {
        title: 'TypeScript',
        slug: 'typescript',
    },
    {
        title: 'React',
        slug: 'react',
    },
    {
        title: 'Playwright',
        slug: 'playwright',
    },
    {
        title: 'REST API',
        slug: 'rest-api',
    },
    {
        title: 'SQL',
        slug: 'sql',
    },
    {
        title: 'Docker',
        slug: 'docker',
    },
    {
        title: 'Git',
        slug: 'git',
    },
];

function TopicsPage() {
    return (
        <main>
            <h1>Interview Arena</h1>
            <h2>Темы для подготовки</h2>

            <ul>
                {topics.map((topic) => (
                    <TopicCard
                        key={topic.slug}
                        title={topic.title}
                        slug={topic.slug}
                    />
                ))}
            </ul>
        </main>
    );
}

export default TopicsPage;
