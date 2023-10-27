import './Celestial.css';

const Celestial = props => {
    const distance = props.distance;
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

    //<circle cx={distance + radius} cy={distance + radius} r={distance - 1} fill={'transparent'} stroke={'#212121'} strokeWidth={2} strokeDasharray={8} />

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center' style={{width: 0}}>
                <div>
                    <svg width={(distance + radius) * 2} height={(distance + radius) * 2}>
                        <circle cx={distance + radius} cy={distance + radius} r={distance - 1} fill={'transparent'} stroke={'#212121'} strokeWidth={2} strokeDasharray={8} />
                    </svg>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center' style={{width: 0}}>
                <div className='orbit d-flex align-items-center flex-shrink-0' style={{width: distance * 2}}>
                    <div className='d-flex align-items-center justify-content-center' style={{width: 0}}>
                        {children}
                    </div>
                    <div className='d-flex align-items-center justify-content-center' style={{width: 0, zIndex: 99}}>
                        <div>
                            <svg width={radius * 2} height={radius * 2}>
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