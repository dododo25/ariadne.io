import './Celestial.css';

import Celestial from './Celestial.js';

const Jupiter = props => {
    return (
        <Celestial radius={30} distance={props.distance} duration={118.6} shift={180} fill='#D2B48C'>
            {props.children}
        </Celestial>
    );
};

export default Jupiter;