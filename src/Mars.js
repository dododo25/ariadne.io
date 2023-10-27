import './Celestial.css';

import Celestial from './Celestial.js';

const Mars = props => {
  return (
    <Celestial radius={6} distance={props.distance} duration={1.88 * 60 * 60 * 24 * 365.2425} fill='#D84315'>
      {props.children}
    </Celestial>
  );
};

export default Mars;