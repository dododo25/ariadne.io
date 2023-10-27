import './Celestial.css';

import Celestial from './Celestial.js';
import {Year} from './Constants.js';

const Mars = props => {
  return (
    <Celestial radius={6} distance={props.distance} duration={1.88 * Year} fill='#D84315'>
      {props.children}
    </Celestial>
  );
};

export default Mars;