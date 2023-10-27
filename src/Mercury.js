import './Celestial.css';

import Celestial from './Celestial.js';

const Mercury = props => {
  return (
    <Celestial radius={4} distance={props.distance} duration={0.241 * 60 * 60 * 24 * 365.2425} fill='#4E342E'>
      {props.children}
    </Celestial>
  );
};

export default Mercury;