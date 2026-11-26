const navItems = [
  ["Home", "#home"],
  ["Contact", "#contact"],
  ["About Us", "#about"],
  ["Industries We Serve", "#industries"],
  ["Brands we Sell", "/brands-we-sell"],
  ["FAQ", "#faq"],
];

const services = [
  ["🔍", "Authentic Suppliers", "We partner only with verified, legitimate manufacturers and distributors."],
  ["🚚", "On-Demand Delivery", "Order what you need, when you need it. No inventory burden on your end."],
  ["🎯", "Industry Focused", "We understand the unique needs of schools, healthcare, and offices."],
];

const industries = [
  ["🏫", "K-12 Schools"],
  ["🎓", "Higher Education"],
  ["🏥", "Healthcare"],
  ["🏢", "Corporate Offices"],
  ["🏛️", "Government"],
];

const brands = ["Rubbermaid", "Avery", "Lexmark", "Diversey", "Fellowes", "GOJO", "SC Johnson", "Georgia-Pacific"];

function Logo() {
  return <img src="/logo.png" alt="Americano Traders" className="logo" />;
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" aria-label="Americano Traders home"><Logo /></a>
          <nav className="desktop-nav" aria-label="Primary Site Navigation">
            {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <details className="mobile-nav">
            <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
            <nav>{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
          </details>
        </div>
      </header>

      <main id="content">
        <section className="hero" id="home">
          <div className="hero-inner">
            <h1>AMERICANO TRADERS</h1>
            <p className="tagline">Authentic Products. On-Demand Delivery.</p>
            <p className="hero-copy">Trusted by corporations and institutions for janitorial, office, and breakroom supplies.</p>
            <div className="buttons">
              <a className="button outline" href="/brands-we-sell">View Brand Catalog <span>→</span></a>
              <a className="button solid" href="#contact">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container centered">
            <h2>What We Do</h2>
            <div className="gold-line" />
            <p className="lead">We source products from authentic suppliers and deliver them on-demand to the industries we serve. No complexity. Just reliability.</p>
            <div className="service-grid">
              {services.map(([icon, title, text]) => (
                <article className="service-card" key={title}>
                  <div className="big-icon" aria-hidden="true">{icon}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries" id="industries">
          <div className="container centered">
            <h2>Industries We Serve</h2>
            <div className="gold-line" />
            <p className="lead">Specialized solutions for your facility type</p>
            <div className="industry-grid">
              {industries.map(([icon, title]) => (
                <a href="#contact" className="industry-card" key={title}>
                  <span aria-hidden="true">{icon}</span>
                  <strong>{title}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="brands">
          <div className="container centered">
            <h2>Trusted Brands</h2>
            <div className="gold-line" />
            <p className="lead">We source from authentic, verified suppliers</p>
            <div className="brand-grid">
              {brands.map(brand => <div className="brand" key={brand}>{brand}</div>)}
            </div>
            <a className="brand-link" href="/brands-we-sell">View all brands →</a>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container centered">
            <h2>Ready to streamline your supply ordering?</h2>
            <p>Join the corporations and institutions that trust us for their daily needs.</p>
            <div className="buttons centered-buttons">
              <a className="button light" href="mailto:support@americanotraders.com">Request Account Access</a>
              <a className="button light-outline" href="mailto:support@americanotraders.com">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main container">
          <div className="footer-brand">
            <Logo />
            <p>1401 21st Street, STE R<br />Sacramento, CA 95811<br />+1 (510) 810-0994<br />support@americanotraders.com</p>
          </div>
          <div><h2>Quick Links</h2><a href="#home">Home</a><a href="#about">About Us</a><a href="#contact">Contact</a><a href="#industries">Industries We Serve</a><a href="/brands-we-sell">Brands we Sell</a></div>
          <div id="faq"><h2>Resources</h2><a href="#faq">FAQ</a><a href="#">Terms &amp; Conditions</a><a href="#">Shipping &amp; Returns</a><a href="#">Privacy Policy</a></div>
          <div><h2>For Customers</h2><a href="#">Login</a><a href="#contact">Request Account</a></div>
        </div>
        <div className="copyright">Copyright © Americano Traders LLC. All rights reserved.</div>
      </footer>
    </>
  );
}
