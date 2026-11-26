import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands we Sell | Americano Traders",
  description: "Authentic products from more than 50 trusted manufacturers across office, janitorial, technology, breakroom, and furniture categories.",
};

const navItems = [
  ["Home", "/"], ["Contact", "/#contact"], ["About Us", "/#about"],
  ["Industries We Serve", "/#industries"], ["Brands we Sell", "/brands-we-sell"], ["FAQ", "/#faq"],
];

const featured = [
  ["3M", "3M"], ["HP", "HP"], ["DY", "Diversey"], ["SG", "Simple Green"], ["LY", "Lysol"],
  ["AC", "ACCO"], ["GJ", "GOJO"], ["SJ", "SC Johnson"], ["BR", "Brother"], ["KC", "Kimberly-Clark"],
  ["GP", "Georgia-Pacific"], ["RB", "Rubbermaid"], ["AV", "Avery"], ["FE", "Fellowes"], ["LX", "Lexmark"],
];

const categories = [
  { id:"office-supplies", icon:"✏️", title:"Office Supplies", brands:[
    ["3M","Post-it Notes, Tapes, Adhesives"], ["Avery","Labels, Dividers, Binders"], ["Fellowes","Shredders, Binders, Desktop Accessories"], ["Swingline","Staplers, Punches, Staples"], ["ACCO","Binders, Fasteners, Presentation Products"], ["Quartet","Whiteboards, Bulletin Boards, Easels"], ["BIC","Pens, Pencils, Markers"], ["Paper Mate","Pens, Pencils, Correction Products"], ["Sharpie","Permanent Markers, Highlighters, Pens"], ["Pilot","Pens, Markers, Correction Products"], ["Zebra","Pens, Mechanical Pencils, Markers"], ["Pentel","Pens, Pencils, Art Supplies"], ["Staedtler","Pencils, Erasers, Art Supplies"], ["Faber-Castell","Pencils, Art Supplies, Erasers"], ["Dixon","Pencils, Art Supplies, Erasers"], ["Ticonderoga","Pencils, Erasers"], ["Oxford","Notebooks, Filler Paper, Folders"], ["Five Star","Notebooks, Folders, Organizers"], ["Mead","Notebooks, Organizers, School Supplies"], ["Cardinal","Binders, Presentation Covers, Sheet Protectors"], ["Wilson Jones","Binders, Ledgers, Indexes"], ["Rolodex","Card Files, Desktop Organizers"], ["Dymo","Label Makers, Labels, Tape"], ["Brother P-Touch","Label Makers, Labels, Tape"],
  ]},
  { id:"janitorial", icon:"🧹", title:"Janitorial & Cleaning", brands:[
    ["Rubbermaid","Mops, Buckets, Carts, Containers"], ["Rubbermaid Commercial","Janitorial Equipment, Waste Containers"], ["Kimberly-Clark Professional","Paper Towels, Tissues, Wipers, Soap"], ["Diversey","Cleaning Chemicals, Disinfectants, Floor Care"], ["GOJO","Hand Soap, Sanitizers, Dispensers"], ["SC Johnson Professional","Cleaning Chemicals, Disinfectants, Floor Care"], ["CloroxPro","Disinfectants, Bleach, Cleaning Wipes"], ["Georgia-Pacific","Paper Towels, Tissue, Dispensers"], ["Tork","Paper Products, Wipers, Dispensers"], ["Boardwalk","Trash Bags, Liners, Can Liners"], ["Inteplast","Trash Bags, Liners, Food Service Bags"], ["Wypall","Wipes, Cloths, Rags"], ["Kimtech","Wipes, Gloves, Protective Apparel"], ["Ecolab","Cleaning Chemicals, Sanitizers, Dispensers"], ["Betco","Cleaning Chemicals, Floor Care, Disinfectants"], ["Zep","Cleaning Chemicals, Degreasers, Disinfectants"], ["Simple Green","All-Purpose Cleaners, Degreasers"], ["Lysol","Disinfectants, Cleaners, Sanitizers"], ["PURELL","Hand Sanitizer, Soap, Dispensers"], ["Dial","Hand Soap, Sanitizers"], ["Softsoap","Hand Soap, Dispensers"],
  ]},
  { id:"technology", icon:"💻", title:"Technology & Printers", brands:[
    ["HP","Printers, Toner, Ink, Paper, Accessories"], ["Brother","Printers, Toner, Ink, Label Makers"], ["Canon","Printers, Toner, Ink, Cameras"], ["Epson","Printers, Toner, Ink, Projectors"], ["Lexmark","Printers, Toner, Ink, Accessories"], ["Dell","Computers, Monitors, Accessories"], ["Samsung","Monitors, Electronics, Toner"], ["Sharp","Copiers, Printers, Calculators"], ["Xerox","Copiers, Printers, Paper, Toner"], ["Ricoh","Copiers, Printers, Toner"], ["Kyocera","Printers, Toner, Accessories"], ["OKI","Printers, Toner, Accessories"], ["Panasonic","Electronics, Phones, Batteries"], ["Belkin","Cables, Surge Protectors, Accessories"], ["Kensington","Locks, Mice, Keyboards, Accessories"], ["Logitech","Mice, Keyboards, Webcams, Speakers"], ["Microsoft","Software, Keyboards, Mice, Surface"], ["Verbatim","Media, Storage, Accessories"], ["TDK","Media, Storage, Accessories"], ["Maxell","Media, Storage, Batteries"], ["Duracell","Batteries, Chargers, Power"], ["Energizer","Batteries, Chargers, Lighting"],
  ]},
  { id:"breakroom", icon:"☕", title:"Breakroom & Food Service", brands:[
    ["Dart","Cups, Plates, Containers, Cutlery"], ["Solo","Cups, Plates, Bowls, Cutlery"], ["Dixie","Cups, Plates, Bowls"], ["Hefty","Trash Bags, Storage Bags, Foam Plates"], ["Ziploc","Storage Bags, Containers"], ["Reynolds","Wrap, Foil, Bags, Pans"], ["Saran","Wrap, Cling Film"], ["Glad","Trash Bags, Storage Bags, Wrap"], ["Folgers","Coffee, Creamer"], ["Starbucks","Coffee, K-Cups"], ["Green Mountain","Coffee, K-Cups"], ["Keurig","Coffee Makers, K-Cups, Accessories"], ["Nescafé","Coffee, Creamer, Hot Chocolate"], ["Crystal Light","Drink Mixes"], ["Snapple","Drinks, Teas"], ["Coffee-mate","Creamer"], ["International Delight","Creamer"], ["Sugar in the Raw","Sweeteners"], ["Sweet’N Low","Sweeteners"], ["Equal","Sweeteners"], ["Splenda","Sweeteners"], ["Domino","Sugar, Sweeteners"], ["Tampax","Feminine Care"], ["Kotex","Feminine Care"],
  ]},
  { id:"furniture", icon:"🪑", title:"Furniture & Organization", brands:[
    ["HON","Chairs, Desks, Filing Cabinets"], ["Steelcase","Chairs, Desks, Office Furniture"], ["Herman Miller","Chairs, Desks, Furniture"], ["Knoll","Furniture, Chairs, Desks"], ["Allsteel","Furniture, Chairs, Desks"], ["Bush","Furniture, Desks, Storage"], ["Sauder","Furniture, Desks, Storage"], ["Bretford","Furniture, Carts, Stands"], ["Safco","Storage, Organizers, Seating"], ["Tennsco","Storage, Shelving, Lockers"], ["Penco","Lockers, Storage, Shelving"], ["Lorell","Furniture, Chairs, Desks"], ["Boss","Furniture, Desks, Seating"], ["Mayline","Furniture, Desks, Tables"], ["Balt","Furniture, Stands, Carts"], ["Ergogenesis","Ergonomic Chairs, Accessories"], ["Humanscale","Ergonomic Furniture, Chairs"], ["Fellowes","Keyboard Trays, Monitor Stands, Footrests"], ["3M","Monitor Stands, Keyboard Trays"],
  ]},
];

function Logo() { return <img src="/logo.png" alt="Americano Traders" className="logo" />; }

function Header() {
  return <header className="site-header"><div className="header-inner">
    <a href="/" aria-label="Americano Traders home"><Logo /></a>
    <nav className="desktop-nav" aria-label="Primary Site Navigation">{navItems.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
    <details className="mobile-nav"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><nav>{navItems.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav></details>
  </div></header>;
}

function Footer() {
  return <footer><div className="footer-main container">
    <div className="footer-brand"><Logo /><p>1401 21st Street, STE R<br />Sacramento, CA 95811<br />+1 (510) 810-0994<br />support@americanotraders.com</p></div>
    <div><h2>Quick Links</h2><a href="/">Home</a><a href="/#about">About Us</a><a href="/#contact">Contact</a><a href="/#industries">Industries We Serve</a><a href="/brands-we-sell">Brands we Sell</a></div>
    <div><h2>Resources</h2><a href="/#faq">FAQ</a><a href="#">Terms &amp; Conditions</a><a href="#">Shipping &amp; Returns</a><a href="#">Privacy Policy</a></div>
    <div><h2>For Customers</h2><a href="#">Login</a><a href="/#contact">Request Account</a></div>
  </div><div className="copyright">Copyright © Americano Traders LLC. All rights reserved.</div></footer>;
}

export default function BrandsPage() {
  return <>
    <a className="skip" href="#content">Skip to content</a><Header />
    <main id="content" className="brands-page">
      <section className="brands-hero"><div className="hero-inner"><h1>Brands We Sell</h1><p>Authentic products from trusted manufacturers</p><div className="buttons"><a className="button solid" href="#all-brands">View All Brands ↓</a><a className="button outline" href="/#contact">Contact Us</a></div></div></section>
      <section className="section featured-brands"><div className="container centered"><h2>Featured Brands</h2><div className="gold-line"/><p className="lead">Some of our most requested manufacturers</p><div className="featured-grid">{featured.map(([initials,name])=><div className="featured-brand" key={name}><div>{initials}</div><h4>{name}</h4></div>)}</div><a className="brand-link" href="#all-brands">View all brands →</a></div></section>
      <section className="catalog" id="all-brands"><div className="container centered"><h2>Our Complete Brand List</h2><div className="gold-line"/><p className="lead">We source from over 50+ authentic, verified suppliers</p><nav className="category-nav" aria-label="Brand categories">{categories.map(c=><a key={c.id} href={`#${c.id}`}>{c.title}</a>)}</nav></div>
        <div className="container catalog-sections">{categories.map(category=><section className="brand-category" id={category.id} key={category.id}><h2><span aria-hidden="true">{category.icon}</span>{category.title}</h2><div className="brand-list">{category.brands.map(([name,products])=><article key={name}><strong>{name}</strong><span>{products}</span></article>)}</div></section>)}<p className="representative">* This is a representative list. We can source additional brands upon request.</p></div>
      </section>
      <section className="brand-request"><div className="container centered"><h2>Don’t see a brand you need?</h2><p>We’re constantly adding new suppliers. Tell us what you’re looking for.</p><div className="buttons"><a className="button light" href="mailto:support@americanotraders.com">Request a Brand →</a><a className="button light-outline" href="/#contact">Request Account Access</a></div></div></section>
      <section className="order-cta"><div className="container centered"><h2>Ready to order from these brands?</h2><p>Set up an account to access pricing and product lists.</p><div className="buttons"><a className="button solid" href="/#contact">Request Account Access</a><a className="button outline" href="/#contact">Contact Us</a></div></div></section>
    </main><Footer />
  </>;
}
