import { useParams } from 'react-router-dom';

function TopicPage() {
    const { topicId } = useParams();

    return (
        <main>
            <h1>{topicId}</h1>

            <p>Вопросы по теме будут здесь</p>
        </main>
    );
}

export default TopicPage;
