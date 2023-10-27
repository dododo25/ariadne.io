import './Celestial.css';

import Celestial from './Celestial.js';

const Venus = props => {
    return (
        <Celestial radius={9} distance={props.distance} duration={6.15} fill='#F5DEB3'>
            {props.children}
        </Celestial>
    );
};

export default Venus;