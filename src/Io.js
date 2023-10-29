import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, MoonOrbitBorderRadius} from './Constants.js';

const Io = props => {
  return (
    <Celestial radius={4} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Day * 1.7627} fill='#FFF176'>
      {props.children}
    </Celestial>
  );
};

export default Io;