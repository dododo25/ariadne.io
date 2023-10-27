import './Celestial.css';

import Celestial from './Celestial.js';

const Venus = props => {
    return (
        <Celestial radius={9} distance={props.distance} duration={0.615 * 60 * 60 * 24 * 365.2425} fill='#F5DEB3'>
            {props.children}
        </Celestial>
    );
};

export default Venus;