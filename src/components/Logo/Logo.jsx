import Tilt from 'react-tilt';
import './Logo.scss';
import Face from './face.png';

const Logo = () => {
  return (
    <Tilt className='Tilt' options={{ max: 55 }} style={{ width: '150px' }}>
      <div className='Tilt-inner'>
        <img src={Face} alt='Logo' />
      </div>
    </Tilt>
  );
};

export default Logo;
