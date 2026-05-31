import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="site-footer">
        <div className="foot-brand">
          <div className="logo-f">Café Bliss</div>
          <p>A haven of flavour in the heart of Karachi. Open for lunch and dinner, six days a week. Private dining available by arrangement.</p>
        </div>

        <div>
          <h4>Navigate</h4>
          <ul>
            <li><a onClick={() => navigate('/')}>Home</a></li>
            <li><a onClick={() => navigate('/about')}>About Us</a></li>
            <li><a onClick={() => navigate('/contact')}>Contact</a></li>
            <li><a onClick={() => navigate('/reservation')}>Reservations</a></li>
          </ul>
        </div>

        <div>
          <h4>Visit Us</h4>
          <ul>
            <li><a>12 Sunset Boulevard</a></li>
            <li><a>Clifton, Karachi 75600</a></li>
            <li><a href="tel:+922134567890">+92 21 3456 7890</a></li>
            <li><a href="mailto:hello@cafebliss.pk">hello@cafebliss.pk</a></li>
          </ul>
        </div>

        <div>
          <h4>Hours</h4>
          <ul>
            <li><a>Mon – Thu: 12pm – 11pm</a></li>
            <li><a>Fri – Sat: 12pm – 12am</a></li>
            <li><a>Sunday: 1pm – 10pm</a></li>
          </ul>
        </div>
      </footer>

      <div className="foot-bottom">
        <p>© 2025 Café Bliss. All rights reserved.</p>
        <p>Clifton, Karachi</p>
      </div>
    </>
  );
}
