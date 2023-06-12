import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <header>
        <h5>Portfolio</h5>
      </header>

      <main>
        <div className="profile">
          <img src="img.jpg" alt="Profile Picture" />
          <h5>Ayu Lestari</h5>
        </div>

        <div className="links">
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19V5l7 7-7 7z" />
              </svg>
              <a href="https://www.facebook.com/tarilesta88/">Facebook</a>
            </li>
            {/* ... */}
          </ul>
        </div>
      </main>

      <footer>
        <p>
          <h6>&copy; 2023 My Portfolio. Everything gonna be okay.</h6>
        </p>
      </footer>
    </Container>
  );
}

export default App;
