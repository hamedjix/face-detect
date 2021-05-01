import './Navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <Logo />
      <a href='https://google.com'>Sign Out</a>
    </nav>
  );
};

export default Navigation;
