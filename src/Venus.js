import './Celestial.css';

import Celestial from './Celestial.js';
import {Year} from './Constants.js';

const Venus = props => {
  return (
    <Celestial radius={9} distance={props.distance} duration={0.615 * Year} fill='#F5DEB3'>
      {props.children}
    </Celestial>
  );
};

export default Venus;