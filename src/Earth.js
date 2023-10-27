import './Celestial.css';

import Celestial from './Celestial.js';

const Earth = props => {
    return (
        <Celestial radius={10} distance={props.distance} duration={60 * 60 * 24 * 365.2425} fill='#0000FF'>
            {props.children}
        </Celestial>
    );
};

export default Earth;