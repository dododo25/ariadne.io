import './Celestial.css';

import Celestial from './Celestial.js';

const Mars = props => {
    return (
        <Celestial radius={6} distance={props.distance} duration={18.8} fill='#D84315'>
            {props.children}
        </Celestial>
    );
};

export default Mars;