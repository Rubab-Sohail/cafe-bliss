import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ fname: '', lname: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fname || !form.email || !form.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-layout">
      {/* INFO PANEL */}
      <div className="contact-info">
        <div className="section-label" style={{ marginBottom: '1rem' }}>Get in Touch</div>
        <h2>We'd Love to<br />Hear from You</h2>

        <div className="contact-detail">
          <div className="icon">📍</div>
          <div>
            <h4>Address</h4>
            <p>12 Sunset Boulevard,<br />Clifton, Karachi 75600</p>
          </div>
        </div>
        <div className="contact-detail">
          <div className="icon">📞</div>
          <div>
            <h4>Phone</h4>
            <p>+92 21 3456 7890</p>
          </div>
        </div>
        <div className="contact-detail">
          <div className="icon">✉️</div>
          <div>
            <h4>Email</h4>
            <p>hello@cafebliss.pk</p>
          </div>
        </div>
        <div className="contact-detail">
          <div className="icon">🕐</div>
          <div>
            <h4>Opening Hours</h4>
            <p>Mon – Thu: 12pm – 11pm<br />Fri – Sat: 12pm – 12am<br />Sunday: 1pm – 10pm</p>
          </div>
        </div>
      </div>

      {/* FORM PANEL */}
      <div className="contact-form-area">
        <h2>Send Us a Message</h2>

        {submitted && (
          <div className="form-success">
            Thank you! We'll be in touch within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="fname" value={form.fname} onChange={handleChange} placeholder="Aisha" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lname" value={form.lname} onChange={handleChange} placeholder="Malik" />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="aisha@example.com" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <select name="subject" value={form.subject} onChange={handleChange}>
              <option value="">Select a topic...</option>
              <option>General Enquiry</option>
              <option>Private Event</option>
              <option>Feedback</option>
              <option>Partnership</option>
              <option>Career</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." />
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
