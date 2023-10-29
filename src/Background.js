const Background = props => {
  return (
    <svg className='d-block' width={props.radius * 2} height={props.radius * 2}>
      <circle cx='50%' cy='50%' r='50%' fill='#212121' />
    </svg>
  );
};

export default Background;