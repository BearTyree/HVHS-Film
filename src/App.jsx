import "./App.css";

const roles = [
  {
    name: "BOWIE",
    age: "16–19",
    gender: "Male",
    ethnicity: "Any ethnicity",
    description:
      "Bowie is an introspective, witty high school senior who overthinks everything, from relationships to philosophy. Charming and playful on the surface, he hides a deep fear of losing meaningful moments and struggles to accept that some connections are temporary.",
  },
  {
    name: "CLARA",
    age: "16–19",
    gender: "Female",
    ethnicity: "Any ethnicity",
    description:
      "Clara is confident, curious, and quick-witted, with a playful sarcasm that hides her emotional depth. She lives in the moment, believing feelings should sometimes lead instead of logic.",
  },
  {
    name: "DAVID",
    age: "Teen",
    gender: "Male",
    ethnicity: "Any ethnicity",
    description: "David runs the secret area above the school.",
  },
  {
    name: "RYAN",
    age: "Teen",
    gender: "Male",
    ethnicity: "Any ethnicity",
    description:
      "Ryan is a lot like Bowie, except he doesn't worry as much. Clara falls for him, just as she fell for Bowie.",
  },
  {
    name: "AMY",
    age: "16–19",
    gender: "Female",
    ethnicity: "Any ethnicity",
    description:
      "Smart and shy, but still charming and exciting. Amy enjoys joking, but is always down for a deeper conversation, much like Clara. However, she lives less in the moment.",
  },
];

function App() {
  return (
    <div className="page">
      {/* Hero */}
      <header className="hero">
        <div className="hero-left">
          <p className="hero-label">Casting Call · 2026</p>
          <h1 className="hero-title">Virtual Butterflies</h1>
          <p className="hero-subtitle">A short film</p>
        </div>
        <div className="hero-divider" />
        <div className="hero-right">
          <div className="hero-synopsis-block">
            <p className="hero-synopsis-label">Synopsis</p>
            <p className="hero-synopsis">
              Highschool senior seeks to make a summer fling last in an
              unexpected way.
            </p>
          </div>
          <div className="hero-audition">
            <p className="hero-audition-label">Auditions</p>
            <p className="hero-audition-dates">March 14</p>
            <p className="hero-audition-time">1:00 pm – 3:00 pm</p>
            <p className="hero-audition-location">
              <span className="hero-location-name">Melrose Library, Roanoke</span>
              2502 Melrose Ave NW Suite D
              <br />
              Roanoke, VA 24017
            </p>
          </div>
          <a href="mailto:film@hvhs.us" className="cta-btn">
            Email: film@hvhs.us
          </a>
        </div>
      </header>

      <main>
        {/* Key Details */}
        <section className="section details-grid">
          <div className="detail-card">
            <span className="detail-icon">📅</span>
            <h3>Audition Date</h3>
            <p>March 14, 2026</p>
            <p className="detail-sub">1 pm – 3 pm</p>
            <p className="detail-location-block">
              <span className="detail-location-name">Melrose Library, Roanoke</span>
              2502 Melrose Ave NW Suite D
              <br />
              Roanoke, VA 24017
            </p>
          </div>
          <div className="detail-card">
            <span className="detail-icon">🎬</span>
            <h3>Production</h3>
            <p>March – April 2026</p>
            <p className="detail-sub">Non-union · Unpaid</p>
          </div>
          <div className="detail-card">
            <span className="detail-icon">📍</span>
            <h3>Shooting Locations</h3>
            <p>Roanoke · Smith Mountain Lake</p>
            <p className="detail-sub">
              Hidden Valley High School
              <br />
              Transportation provided
            </p>
          </div>
        </section>

        {/* Synopsis */}
        <section className="section synopsis-section">
          <div className="section-inner">
            <p className="section-label">The Film</p>
            <h2>Synopsis</h2>
            <p className="synopsis-text">
              Highschool senior seeks to make a summer fling last in an
              unexpected way.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="section roles-section">
          <div className="section-inner">
            <p className="section-label">Open Roles</p>
            <h2>Characters</h2>
            <div className="roles-grid">
              {roles.map((role) => (
                <div key={role.name} className="role-card">
                  <div className="role-header">
                    <span className="role-name">{role.name}</span>
                    <span className="role-meta">
                      {role.age} · {role.gender} · {role.ethnicity}
                    </span>
                  </div>
                  <p className="role-desc">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit */}
        <section className="section submit-section">
          <div className="section-inner submit-inner">
            <p className="section-label">Get Involved</p>
            <h2>How to Submit</h2>
            <p className="submit-body">
              Send your <strong>first and last name</strong>, the{" "}
              <strong>role(s) you are interested in</strong>, and a{" "}
              <strong>headshot</strong> to the address below. Acting résumés are
              accepted but not required.
            </p>
            <a href="mailto:film@hvhs.us" className="cta-btn">
              film@hvhs.us
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2026 HVHS Film · Hidden Valley High School · All roles are unpaid
        </p>
      </footer>
    </div>
  );
}

export default App;
