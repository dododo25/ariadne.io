import { useState } from 'react';

import './Celestial.css';

import {OrbitBorderRadius} from './Constants.js';
import process from './ElementProcessor.js';

const Celestial = props => {
  const distance = props.distance;
  const radius = props.radius;
  const shift = props.shift ? props.shift : 0;

  const animation = `${props.duration}s linear 0s spin infinite`;
  const children = process(props.children);

  const [orbitBorderColor, setOrbitBorderColor] = useState('transparent');

  const onMouseEnter = () => setOrbitBorderColor('url(#grad2)');
  const onMouseLeave = () => setOrbitBorderColor('transparent');

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-0 d-flex justify-content-center align-items-center'>
        <div className='pe-none'>
          <svg className='d-block' width={(distance + OrbitBorderRadius) * 2} height={(distance + OrbitBorderRadius) * 2}>
            <g fillRule='evenodd' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <path className='content pe-auto'
                    d={`M 0 ${distance + OrbitBorderRadius} A ${distance + OrbitBorderRadius} ${distance + OrbitBorderRadius} 0 0 1 ${(distance + OrbitBorderRadius) * 2} ${distance + OrbitBorderRadius} A ${distance + OrbitBorderRadius} ${distance + OrbitBorderRadius} 0 0 1 0 ${distance + OrbitBorderRadius} z
                        M ${OrbitBorderRadius * 2} ${distance + OrbitBorderRadius} A ${distance - OrbitBorderRadius} ${distance - OrbitBorderRadius} 0 0 1 ${distance * 2} ${distance + OrbitBorderRadius} A ${distance - OrbitBorderRadius} ${distance - OrbitBorderRadius} 0 0 1 ${OrbitBorderRadius * 2} ${distance + OrbitBorderRadius} z`}
                    fill={orbitBorderColor} />
            </g>
            <circle className='orbit' cx='50%' cy='50%' r={distance} stroke='#FAFAFA' strokeWidth='1' strokeDasharray='12' fill='transparent' />
          </svg>
        </div>
      </div>
      <div className='w-0 d-flex align-items-center justify-content-center pe-none' style={{transform: `rotate(${shift}deg)`}}>
        <div className='d-flex align-items-center flex-shrink-0' style={{width: distance * 2, animation: animation}}>
          <div className='w-0 d-flex align-items-center justify-content-center pe-auto'>
            {children}
          </div>
          <div className='celestial w-0 d-flex align-items-center justify-content-center'>
            <div>
              <svg className='d-block' width={radius * 2} height={radius * 2}>
                <circle cx={radius} cy={radius} r={radius} fill={props.fill} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celestial;