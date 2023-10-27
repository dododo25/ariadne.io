import './Celestial.css';

import Celestial from './Celestial.js';

const Uranus = props => {
    return (
        <Celestial radius={22} distance={props.distance} duration={840.1} fill='#66BB6A'>
            {props.children}
        </Celestial>
    );
};

export default Uranus;