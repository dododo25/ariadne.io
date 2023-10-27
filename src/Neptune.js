import './Celestial.css';

import Celestial from './Celestial.js';
import {Year} from './Constants.js';

const Neptune = props => {
  return (
    <Celestial radius={18} distance={props.distance} duration={164.79 * Year} fill='#3949AB'>
      {props.children}
    </Celestial>
  );
};

export default Neptune;