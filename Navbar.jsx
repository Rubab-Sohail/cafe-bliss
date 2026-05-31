import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <span className="logo" onClick={() => navigate('/')}>Café Bliss</span>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        <li><NavLink to="/reservation" className={({ isActive }) => isActive ? 'active' : ''}>Reservations</NavLink></li>
      </ul>
      <button className="nav-cta" onClick={() => navigate('/reservation')}>Book a Table</button>
    </nav>
  );
}
