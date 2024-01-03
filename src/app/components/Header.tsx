import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
`;

const StyledLink = styled.a`
  margin: 0 10px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #61dafb;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Temesgen A. Shonge</h1>
      <Nav>
        <Link href="/" passHref><StyledLink>Home</StyledLink></Link>
        <Link href="#about" passHref><StyledLink>About Me</StyledLink></Link>
        <Link href="#projects" passHref><StyledLink>Projects</StyledLink></Link>
        <Link href="#skills" passHref><StyledLink>Skills</StyledLink></Link>
        <Link href="#contact" passHref><StyledLink>Contact</StyledLink></Link>
      </Nav>
    </HeaderContainer>
  );
}