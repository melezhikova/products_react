import Product from "./Product";
import PropTypes from "prop-types";

export default function ShopItem (props) {
    return (
        <div className="listItem">
            <img className="prodImage" src={props.item.img} alt=""></img>
            <div className="prodName">{props.item.name}</div>
            <div className="prodColor">{props.item.color}</div>
            <div className="prodPrice">${props.item.price}</div>
            <button type="button" className="addBtn">ADD TO CART</button>
        </div>
    )
}

ShopItem.propTypes = {
    item: PropTypes.instanceOf(Product).isRequired
}

ShopItem.defaultProps = {
    item: null,
};