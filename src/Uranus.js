import './Celestial.css';

import Celestial from './Celestial.js';
import {Year} from './Constants.js';

const Uranus = props => {
  return (
    <Celestial radius={22} distance={props.distance} duration={84.01 * Year} fill='#66BB6A'>
      {props.children}
    </Celestial>
  );
};

export default Uranus;