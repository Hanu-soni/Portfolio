import HeaderImage from '../../assets/Headerimg.jpeg';
import data from './data';
import './header.css';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>PANKAJ SONI</h3>
        <p>
          I AM MERN STACK TRAINEE. LEARNING AND EXPLORING NEW THINGS ARE MY HOBBIES.
          I HAVE GOOD TEAM-LEADING SKILLS AND ALSO QUALIFIED IN BUSINESS COMMUNICATION.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contact Info</a>
          <a href="#portfolio" className='btn primary'>My Career</a>
        </div>
        <div className="header__socials">
          {data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
        </div>
      </div>
    </header>
  )
}

export default Header;
