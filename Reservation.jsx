import { useState } from 'react';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', phone: '',
    date: '', time: '', guests: '', occasion: '', notes: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fname || !form.email || !form.date || !form.time || !form.guests) {
      alert('Please fill in name, email, date, time, and number of guests.');
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="res-hero">
        <div className="section-label" style={{ marginBottom: '0.5rem' }}>Reservations</div>
        <h1>Reserve Your Table</h1>
        <p>We'll hold a table for you. Booking takes less than a minute.</p>
      </section>

      <div className="res-info-strip">
        <div className="res-info-item"><h4>Lunch Service</h4><p>12:00 pm – 3:00 pm</p></div>
        <div className="res-info-item"><h4>Dinner Service</h4><p>7:00 pm – 11:00 pm</p></div>
        <div className="res-info-item"><h4>Private Dining</h4><p>By arrangement</p></div>
      </div>

      <div style={{ background: '#fff' }}>
        <div className="res-form-wrap">
          {submitted && (
            <div className="form-success">
              🎉 Reservation confirmed! A confirmation will be sent to {form.email}. We look forward to welcoming you.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="res-grid">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="fname" value={form.fname} onChange={handleChange} placeholder="Omar" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lname" value={form.lname} onChange={handleChange} placeholder="Khalid" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="omar@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 0000000" />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="form-group">
                <label>Time</label>
                <select name="time" value={form.time} onChange={handleChange}>
                  <option value="">Select time...</option>
                  {timeSlots.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Number of Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  <option value="">Select...</option>
                  {['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7–10 guests', '10+ guests (call us)'].map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Occasion (optional)</label>
                <select name="occasion" value={form.occasion} onChange={handleChange}>
                  <option value="">None</option>
                  {['Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Family Gathering', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Special Requests</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Dietary requirements, seating preferences, special arrangements..." />
            </div>
            <button type="submit" className="btn-primary">Confirm Reservation</button>
          </form>
        </div>
      </div>
    </>
  );
}
