import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chokri Samaali</h2>
        <p><a href="mailto:Chokri.samali@gmail.com">Chokri.samali@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Chokri. I like building things.
        I am a <a href="http://www.fsegs.rnu.tn/">FSEG Sfax</a> graduate, and
        the co-founder  of <a href="https://www.arabclassroom.com">Arabclassroom</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Chokri Samaali <Link to="/">arabclassroom.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
