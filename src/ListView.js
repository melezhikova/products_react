import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

export default function ListView  (props) {
    if (!props.items.length) return null;
    return (
        <div className="itemsContainer">
            {props.items.map (
                o => <ShopItem key={o.id} item={o} />
            )}
        </div>
    );
}

ListView.propTypes = {
    items: PropTypes.array
}

ListView.defaultProps = {
    items: [],
};