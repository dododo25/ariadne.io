import './Celestial.css';

import Celestial from './Celestial.js';

const Saturn = props => {
    return (
        <Celestial radius={26} distance={props.distance} duration={294.6} fill='#D2B48C'>
            {props.children}
        </Celestial>
    );
};

export default Saturn;