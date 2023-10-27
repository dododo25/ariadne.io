import './Celestial.css';

const Star = props => {
    const radius = props.radius;
    const children = [];

    if (props.children && props.children.length) {
        for (let i = 0; i < props.children.length; i++) {
            const child = props.children[i];

            children.push(
                <div key={i} className='d-flex justify-content-center align-items-center' style={{width: 0}}>
                    {child}
                </div>
            );
        }
    } else if (props.children) {
        children.push(
            <div className='d-flex justify-content-center align-items-center' style={{width: 0}}>
                {props.children}
            </div>
        );
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            {children}
            <div className='d-flex align-items-center justify-content-center' style={{width: 0, zIndex: 999}}>
                <div>
                    <svg width={radius * 2} height={radius * 2}>
                        <circle cx={radius} cy={radius} r={radius} fill={props.fill} />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Star;