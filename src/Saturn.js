import './Celestial.css';

const Saturn = props => {
  const radius = 26;
  const svgSize = 80;

  const duration = 29.46 * 60 * 60 * 24 * 365.2425;

  const distance = props.distance;
  const shift = props.shift ? props.shift : 0;

  const animation = `${duration}s linear 0s orbit-spin infinite`;

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
            <circle cx={distance + radius} cy={distance + radius} r={distance - 1} fill={'transparent'} stroke={'#FAFAFA'} strokeWidth={2} strokeDasharray={8} />
          </svg>
        </div>
      </div>
      <div className='w-0 d-flex align-items-center justify-content-center' style={{transform: `rotate(${shift}deg)`}}>
        <div className='d-flex align-items-center flex-shrink-0' style={{width: distance * 2, animation: animation}}>
          <div className='w-0 d-flex align-items-center justify-content-center'>
            {children}
          </div>
          <div className='w-0 d-flex align-items-center justify-content-center' style={{zIndex: 99}}>
            <div>
              <svg className='d-block' width={svgSize} height={svgSize}>
                  <circle cx={svgSize / 2} cy={svgSize / 2} r={radius} fill='#D2B48C' />
                  <g transform='translate(0 -3)'>
                      <circle cx={svgSize / 2} cy={svgSize / 2} r='22' fill='transparent' stroke-width='1' stroke='#9E9E9E' 
                          transform='skewX(45) translate(-38 0)' />
                      <circle cx={svgSize / 2} cy={svgSize / 2} r='24' fill='transparent' stroke-width='0.5' stroke='#9E9E9E' 
                          transform='skewX(45) translate(-38 0)' />
                      <circle cx={svgSize / 2} cy={svgSize / 2} r='26' fill='transparent' stroke-width='1.5' stroke='#9E9E9E' 
                          transform='skewX(45) translate(-38 0)' />
                  </g>
                  <path d='M 40 14 A 26 26 0 0 1 66 40 L 26 40 L 24 19.5 A 26 26 0 0 1 40 14' fill='#D2B48C' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saturn;