import Product from "./Product";
import PropTypes from "prop-types";

export function ShopCard (props) {
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

export function ShopItem (props) {
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

export function CardsView (props) {
    return (
        <div className="cardsContainer">
            {props.cards.map (
                o => <ShopCard key={o.id} item={o} />
            )}
        </div>
    );
}

export function ListView  (props) {
    return (
        <div className="itemsContainer">
            {props.items.map (
                o => <ShopItem key={o.id} item={o} />
            )}
        </div>
    );
}