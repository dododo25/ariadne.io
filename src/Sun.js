import './Celestial.css';

const Sun = props => {
  const radius = 80;
  const children = [];

  if (props.children && props.children.length) {
    for (let i = 0; i < props.children.length; i++) {
      const child = props.children[i];

      children.push(
        <div key={i} className='w-0 d-flex justify-content-center align-items-center'>
          {child}
        </div>
      );
    }
  } else if (props.children) {
    children.push(
      <div key={0} className='w-0 d-flex justify-content-center align-items-center'>
        {props.children}
      </div>
    );
  }

  return (
    <div className='d-flex align-items-center justify-content-center'>
      {children}
      <div className='sun w-0 d-flex align-items-center justify-content-center'>
        <div>
          <svg className='d-block' width={radius * 2} height={radius * 2}>
            <circle cx={radius} cy={radius} r={radius} fill='#FBC02D' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sun;