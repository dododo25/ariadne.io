import './App.css';

import Background from './Background.js';
import Earth from './Earth.js';
import Jupiter from './Jupiter.js';
import Mars from './Mars.js';
import Mercury from './Mercury.js';
import Moon from './Moon.js';
import Neptune from './Neptune.js';
import Saturn from './Saturn.js';
import Sun from './Sun.js';
import Uranus from './Uranus.js';
import Venus from './Venus.js';

function App() {
  return (
    <div className='App d-flex justify-content-center'>
      <svg className='w-0'>
        <defs>
          <radialGradient id='grad1' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
            <stop offset='100%' style={{stopColor: '#FBC02D', stopOpacity: 0.2}} />
          </radialGradient>
          <radialGradient id='grad2' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
            <stop offset='100%' style={{stopColor: '#FAFAFA', stopOpacity: 0.2}} />
          </radialGradient>
        </defs>
      </svg>
      <div className='w-0'>
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <div>
            <Background radius={558} />
          </div>
        </div>
      </div>
      <div className='w-0'>
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <Sun>
            <Mercury distance={120} />
            <Venus   distance={140} />
            <Earth   distance={180}>
              <Moon distance={20} />
            </Earth>
            <Mars    distance={220} />
            <Jupiter distance={300} />
            <Saturn  distance={380} />
            <Uranus  distance={460} />
            <Neptune distance={540} />
          </Sun>
        </div>
      </div>
      <div className='w-0'>
        <div className='vw-50 vh-100 d-flex justify-content-end align-items-end p-3 pe-none'>
          <span className='text-white'>Sizes and distances are not to scale.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
