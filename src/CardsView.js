import ShopCard from "./ShopCard";
import PropTypes from "prop-types";


export default function CardsView (props) {
    if (!props.cards.length) return null;
    return (
        <div className="cardsContainer">
            {props.cards.map (
                o => <ShopCard key={o.id} item={o} />
            )}
        </div>
    );
}

CardsView.propTypes = {
    cards: PropTypes.array
}

CardsView.defaultProps = {
    cards: [],
};