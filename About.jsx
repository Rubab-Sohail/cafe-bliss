const values = [
  { icon: '🌿', title: 'Farm to Fork', desc: 'We source ingredients from local farmers and trusted suppliers every single morning.' },
  { icon: '🍷', title: 'Curated Cellar', desc: 'Our sommelier hand-picks every bottle to perfectly complement our seasonal menus.' },
  { icon: '🎨', title: 'Creative Kitchen', desc: 'We believe plating is an art form. Every dish is crafted to delight the eyes first.' },
  { icon: '❤️', title: 'Genuine Warmth', desc: 'Hospitality is our culture. Every guest is treated as a cherished friend at our table.' },
];

const team = [
  {
    name: 'Chef Bilal Raza', role: 'Executive Chef & Co-founder',
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80'
  },
  {
    name: 'Mehreen Ansari', role: 'Head of Pastry',
    img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80'
  },
  {
    name: 'Tariq Mahmood', role: 'Beverage Director',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div>
          <div className="section-label">Our Story</div>
          <h1>Born from a Passion<br />for Real Food</h1>
          <p style={{ marginBottom: '1rem' }}>
            Café Bliss began in 2012 as a small corner café with a simple belief: that exceptional
            ingredients, prepared with care and creativity, create moments of genuine joy.
          </p>
          <p>
            Over a decade later, that belief still guides every dish we serve, every flower on
            every table, and every warm greeting at the door.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=80"
          alt="Inside Café Bliss"
          style={{ width: '100%', height: 380, objectFit: 'cover' }}
        />
      </section>

      {/* VALUES */}
      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-item" key={i}>
            <div className="value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      {/* TEAM */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-label">The Team</div>
        <h2 className="section-title">Faces Behind the Flavours</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.img} alt={member.name} className="team-avatar" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPACE */}
      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">Our Space</div>
            <h2 className="section-title">Designed for Connection</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              From the warm amber lighting of the main dining room to the open-sky garden terrace,
              every corner of Café Bliss is designed to slow you down and invite you to savour the moment.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              We also offer a private dining suite for intimate gatherings, corporate dinners,
              and celebrations for up to 20 guests.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=500&q=80" alt="Main Hall" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80" alt="Terrace" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=500&q=80" alt="Wine Cellar" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" alt="Private Suite" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </>
  );
}
