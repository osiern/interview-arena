type TopicCardProps = {
    title: string;
};

function TopicCard({title}: TopicCardProps) {
    return (
        <li>
            {title}
        </li>
    );
}

export default TopicCard;