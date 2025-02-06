import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
`;

const NavLinks = styled.div`
  display: none;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    color: var(--text-primary);
    &:hover {
      color: var(--accent);
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  right: ${props => props.$isOpen ? '0' : '-100%'};
  width: 100%;
  height: calc(100vh - 70px);
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  transition: right 0.3s ease;
  
  @media (min-width: 768px) {
    display: none;
  }

  a {
    color: var(--text-primary);
    padding: 1rem;
    width: 100%;
    text-align: center;
    
    &:hover {
      color: var(--accent);
      background: var(--secondary);
    }
  }
`;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: var(--accent);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">Pradeep</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/achievements">Achievements</Link> */}
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </NavLinks>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </MenuButton>
      <MobileMenu $isOpen={isOpen}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/achievements" onClick={() => setIsOpen(false)}>Achievements</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </MobileMenu>
    </Nav>
  );
};
export default Navbar;