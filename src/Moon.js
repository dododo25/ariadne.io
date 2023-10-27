import './Celestial.css';

import Celestial from './Celestial.js';

const Moon = props => {
    return (
        <Celestial radius={3} distance={props.distance} duration={0.01} fill='#BDBDBD'>
            {props.children}
        </Celestial>
    );
};

export default Moon;