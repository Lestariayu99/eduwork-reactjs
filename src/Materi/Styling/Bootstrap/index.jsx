import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function Profile() {
  return (
    <section className="profile">
      <img src="Isabella.jpg" alt="Profile Picture" />
      <h2>Ayu Lestari</h2>
    </section>
  );
}

function Links() {
  return (
    <section className="links">
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19V5l7 7-7 7z" />
          </svg>
          <a href="https://www.facebook.com/tarilesta88/">Facebook</a>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 11v4m0 0V9m0 4H9m6 0h2" />
          </svg>
          <a href="https://www.instagram.com/ayule99/">Instagram</a>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.5 7.5l-4 4L12 21l-5.5-5.5-4-4L2 9.5 12 3l10 6.5z" />
          </svg>
          <a href="https://twitter.com/ayulestariwandi">Twitter</a>
        </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="container">
      <header>
        <h1>Portfolio</h1>
      </header>

      <main>
        <Profile />
        <Links />
      </main>

      <footer>
        <p>&copy; 2023 My Portfolio. Everything gonna be okay.</p>
      </footer>
    </div>
  );
}

export default App;
