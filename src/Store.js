import CardsView from "./CardsView";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Store (props) {
    const [viewType, setView] = useState('view_module');
    const onViewSwitch = () => {
        setView((prevState) => prevState === 'view_module' ? 'view_list' : 'view_module');
    }
    return (
        <div className="mainContainer">
            <IconSwitch icon={viewType} onSwitch={onViewSwitch}/>
            <div>
                {viewType === 'view_module' ? <CardsView cards={props.items}/> : <ListView items={props.items}/>}
            </div>
        </div>
    )
}

Store.propTypes = {
    items: PropTypes.array
}

Store.defaultProps = {
    items: null
};
