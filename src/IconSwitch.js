import PropTypes from "prop-types";

export default function IconSwitch (props) {
    const { icon, onSwitch} = props;
    return (
        <div className="material-icons" onClick={onSwitch}>{icon}</div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}

IconSwitch.defaultProps = {
    icon: 'view_module',
    onSwitch: null
};