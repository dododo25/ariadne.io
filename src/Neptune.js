import './Celestial.css';

import Celestial from './Celestial.js';

const Neptune = props => {
    return (
        <Celestial radius={18} distance={props.distance} duration={164.79 * 60 * 60 * 24 * 365.2425} fill='#3949AB'>
            {props.children}
        </Celestial>
    );
};

export default Neptune;