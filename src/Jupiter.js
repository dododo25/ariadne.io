import './Celestial.css';

import Celestial from './Celestial.js';

const Jupiter = props => {
    return (
        <Celestial radius={30} distance={props.distance} duration={11.86 * 60 * 60 * 24 * 365.2425} shift={180} fill='#D2B48C'>
            {props.children}
        </Celestial>
    );
};

export default Jupiter;