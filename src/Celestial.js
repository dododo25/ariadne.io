import './Celestial.css';

const Celestial = props => {
  const distance = props.distance;
  const radius = props.radius;
  const shift = props.shift ? props.shift : 0;

  const animation = `${props.duration}s linear 0s spin infinite`;

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