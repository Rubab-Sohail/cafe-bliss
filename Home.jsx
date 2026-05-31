import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    cat: 'Starter', name: 'Truffle Mushroom Crostini',
    desc: 'Wild mushrooms on toasted sourdough, drizzled with white truffle oil and shaved parmesan.',
    price: 'Rs. 950',
    img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80'
  },
  {
    cat: 'Starter', name: 'Saffron Bisque',
    desc: 'Velvety roasted tomato soup infused with saffron, topped with crème fraîche and chive oil.',
    price: 'Rs. 750',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80'
  },
  {
    cat: 'Main Course', name: 'Pan-Seared Sea Bass',
    desc: 'Atlantic sea bass with lemon butter beurre blanc, seasonal vegetables, and herb-potato purée.',
    price: 'Rs. 2,400',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80'
  },
  {
    cat: 'Main Course', name: 'Herb-Crusted Rack of Lamb',
    desc: 'Free-range lamb with rosemary jus, dauphinoise potato, and mint gremolata.',
    price: 'Rs. 3,200',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80'
  },
  {
    cat: 'Dessert', name: 'Valrhona Chocolate Fondant',
    desc: 'Warm dark chocolate fondant with Madagascan vanilla gelato and salted caramel sauce.',
    price: 'Rs. 850',
    img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80'
  },
  {
    cat: 'Dessert', name: 'Classic Crème Brûlée',
    desc: 'Vanilla crème brûlée with a caramelised sugar crust and fresh seasonal berries.',
    price: 'Rs. 750',
    img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80'
  },
];

const testimonials = [
  { text: '"Café Bliss is where I bring everyone who visits Karachi. The food is extraordinary, and the atmosphere is simply unmatched."', author: '— Aisha Malik, Food Critic' },
  { text: '"We celebrated our anniversary here and every detail was perfect. The lamb rack was the best I\'ve ever had. Cannot wait to return."', author: '— Omar & Sara Khalid' },
  { text: '"The truffle crostini and the fondant alone are worth the visit. Genuinely world-class dining without leaving the city."', author: '— Zara Hasan, Regular Guest' },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-img" />
        <div className="hero-content">
          <div className="hero-label">Est. 2012 · Karachi</div>
          <h1>Where Every Bite<br />Tells a <em>Story</em></h1>
          <p>A sanctuary of flavour nestled in the heart of the city. From farm-fresh ingredients to handcrafted desserts, we serve moments worth savouring.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/reservation')}>Reserve a Table</button>
            <button className="btn-outline" onClick={() => navigate('/about')}>Our Story</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-card"><div className="num">12+</div><div className="lbl">Years of Craft</div></div>
          <div className="hero-stat-card"><div className="num">4.9★</div><div className="lbl">Guest Rating</div></div>
          <div className="hero-stat-card"><div className="num">80+</div><div className="lbl">Dishes on Menu</div></div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="menu-section">
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <div className="section-label">Signature Selections</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ display: 'inline-block' }}>A Taste of Our Menu</h2>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, i) => (
            <div className="menu-card" key={i}>
              <div className="menu-card-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-card-body">
                <div className="cat">{item.cat}</div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMBIENCE */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-label">Ambience</div>
        <h2 className="section-title" style={{ maxWidth: 400 }}>More Than a Meal —<br />An Experience</h2>
        <div className="ambience-grid">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80"
            alt="The Dining Room"
            className="ambience-main"
          />
          <div className="ambience-side">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
              alt="The Garden Terrace"
            />
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
              alt="The Private Suite"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Guest Reviews</div>
          <h2 className="section-title" style={{ display: 'inline-block' }}>What Our Guests Say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="stars">★★★★★</div>
              <div className="testi-text">{t.text}</div>
              <div className="testi-author">{t.author}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
