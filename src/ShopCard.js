import Product from "./Product";
import PropTypes from "prop-types";

export default function ShopCard (props) {
    const image = props.item.img;
    return (
        <div className="shopCard" style={{ backgroundImage:`url(${image})` }}>
            <div className="cardName">
                <div className="prodName">{props.item.name}</div>
                <div className="prodColor">{props.item.color}</div>
            </div>
            <div className="priceAndBtn">
                <div className="prodPrice">${props.item.price}</div>
                <button type="button" className="addBtn">ADD TO CART</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    item: PropTypes.instanceOf(Product).isRequired
}

ShopCard.defaultProps = {
    item: null,
};