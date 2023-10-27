import './Celestial.css';

import Celestial from './Celestial.js';

const Mercury = props => {
    return (
        <Celestial radius={4} distance={props.distance} duration={2.41} fill='#4E342E'>
            {props.children}
        </Celestial>
    );
};

export default Mercury;