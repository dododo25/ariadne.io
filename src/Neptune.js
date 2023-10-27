import './Celestial.css';

import Celestial from './Celestial.js';

const Neptune = props => {
    return (
        <Celestial radius={18} distance={props.distance} duration={1647.9} fill='#3949AB'>
            {props.children}
        </Celestial>
    );
};

export default Neptune;