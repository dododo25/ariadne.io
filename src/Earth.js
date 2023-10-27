import './Celestial.css';

import Celestial from './Celestial.js';
import {Year} from './Constants.js';

const Earth = props => {
  return (
    <Celestial radius={10} distance={props.distance} duration={Year} fill='#0000FF'>
      {props.children}
    </Celestial>
  );
};

export default Earth;