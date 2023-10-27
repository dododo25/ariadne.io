import './Celestial.css';

import Celestial from './Celestial.js';

const Uranus = props => {
  return (
    <Celestial radius={22} distance={props.distance} duration={84.01 * 60 * 60 * 24 * 365.2425} fill='#66BB6A'>
      {props.children}
    </Celestial>
  );
};

export default Uranus;