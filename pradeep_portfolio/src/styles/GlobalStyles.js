import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0a192f;
    --secondary: #112240;
    --accent: #64ffda;
    --text-primary: #ccd6f6;
    --text-secondary: #8892b0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--primary);
    color: var(--text-primary);
    ${'' /* line-height: 1.6; */}
  }

  a {
    text-decoration: none;
    color: var(--accent);
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 1px solid var(--accent);
    color: var(--accent);
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(100, 255, 218, 0.1);
    }
  }

  /* Responsive Typography */
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.1rem);
  }

  /* Mobile-first padding */
  section {
    padding: 60px 20px !important;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 50px !important;
    }
  }

  @media (min-width: 1024px) {
    section {
      padding: 100px 150px !important;
    }
  }
`;

export default GlobalStyles;