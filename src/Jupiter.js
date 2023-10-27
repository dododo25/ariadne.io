import './Celestial.css';

import {Year} from './Constants.js';

const Jupiter = props => {
  const radius = 30;
  const duration = 11.86 * Year;

  const distance = props.distance;
  const shift = props.shift ? props.shift : 0;

  const orbitAnimation = `${duration}s linear 0s spin infinite`;
  const planetAnimation = `${duration}s linear 0s spin-backward infinite`;

  const children = [];

  if (props.children && props.children.length) {
    for (let i = 0; i < props.children.length; i++) {
      const child = props.children[i];

      children.push(
        <div key={i} className='d-flex justify-content-center align-items-center'>
          {child}
        </div>
      );
    }
  } else if (props.children) {
    children.push(
      <div key={0} className='d-flex justify-content-center align-items-center'>
        {props.children}
      </div>
    );
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-0 d-flex justify-content-center align-items-center'>
        <div>
          <svg className='d-block' width={(distance + radius) * 2} height={(distance + radius) * 2}>
            <circle className='orbit' cx={distance + radius} cy={distance + radius} r={distance - 1} />
          </svg>
        </div>
      </div>
      <div className='w-0 d-flex align-items-center justify-content-center' style={{transform: `rotate(${shift}deg)`}}>
        <div className='d-flex align-items-center flex-shrink-0' style={{width: distance * 2, animation: orbitAnimation}}>
          <div className='w-0 d-flex align-items-center justify-content-center'>
            {children}
          </div>
          <div className='celestial w-0 d-flex align-items-center justify-content-center' style={{animation: planetAnimation}}>
            <div>
              <svg className='d-block' width={radius * 2} height={radius * 2}>
                <circle cx={radius} cy={radius} r={radius} fill='#DEB887' />
                <ellipse cx='40' cy='40' rx='9' ry='5' fill='#8B0000' fillOpacity='0.6' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jupiter;