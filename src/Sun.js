import { useState } from 'react';

import './Celestial.css';

import process from './ElementProcessor';

const Sun = props => {
  const radius = 80;
  
  const children = process(props.children);

  const [orbitBorderColor, setOrbitBorderColor] = useState('transparent');

  const onMouseEnter = () => setOrbitBorderColor('url(#grad1)');
  const onMouseLeave = () => setOrbitBorderColor('transparent');


  return (
    <div className='d-flex align-items-center justify-content-center'>
      {children}
      <div className='sun w-0 d-flex align-items-center justify-content-center'>
        <div>
          <svg className='d-block' width={radius * 2 + 16} height={radius * 2 + 16}>
            <circle cx='50%' cy='50%' r='50%' fill={orbitBorderColor} />
            <circle className='content' cx='50%' cy='50%' r={radius} fill='#FBC02D' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sun;