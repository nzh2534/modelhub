import './flippable-card.css';
import Card from './card/card';

function ClickableCard({front, link, accuracy}) {
    return(
        <div className="flippable-card-container">
                <Card front={front} link={link} accuracy={accuracy}/>
        </div>
    );
}

export default ClickableCard;