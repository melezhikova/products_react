import { CardsView, ListView } from "./view";
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

function IconSwitch (props) {
    const { icon, onSwitch} = props;
    return (
        <div className="material-icons" onClick={onSwitch}>{icon}</div>
    )
}