import { Link } from 'react-router-dom';

type TopicCardProps = {
    title: string;
    slug: string;
};

function TopicCard({ title, slug }: TopicCardProps) {
    return (
        <li>
            <Link to={`/topic/${slug}`}>{title}</Link>
        </li>
    );
}

export default TopicCard;
