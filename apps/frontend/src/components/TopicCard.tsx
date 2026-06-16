import {Link} from 'react-router-dom';

type TopicCardProps = {
    title: string;
};

function TopicCard({title}: TopicCardProps) {
    return (
        <li>
            <Link to={`/topic/${title.toLowerCase()}`}>
                {title}
            </Link>
        </li>
    );
}

export default TopicCard;