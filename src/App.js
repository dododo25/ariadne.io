import Celestial from './Celestial.js';
import Star from './Star.js';

function App() {
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <Star radius={40} fill={'#FF0000'}>
        <Celestial distance={120} radius={10} fill={'#00FF00'}>
          <Celestial distance={120} radius={10} fill={'#00FF00'}></Celestial>
        </Celestial>
      </Star>
    </div>
  );
}

export default App;
