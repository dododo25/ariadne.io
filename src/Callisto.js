import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, MoonOrbitBorderRadius} from './Constants.js';

const Callisto = props => {
  return (
    <Celestial radius={3} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Day * 16.690} fill='#9575CD'>
      {props.children}
    </Celestial>
  );
};

export default Callisto;