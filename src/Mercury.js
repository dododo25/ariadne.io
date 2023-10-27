import './Celestial.css';

import Celestial from './Celestial.js';
import Year from './Constants.js';

const Mercury = props => {
  return (
    <Celestial radius={4} distance={props.distance} duration={0.241 * Year} fill='#4E342E'>
      {props.children}
    </Celestial>
  );
};

export default Mercury;