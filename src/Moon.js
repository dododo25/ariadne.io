import './Celestial.css';

import Celestial from './Celestial.js';
import {Month, MoonOrbitBorderRadius} from './Constants.js';

const Moon = props => {
  return (
    <Celestial radius={3} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Month} fill='#BDBDBD'>
      {props.children}
    </Celestial>
  );
};

export default Moon;