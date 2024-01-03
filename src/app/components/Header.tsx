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

const Logo = styled.h1`
  margin-right: 20px; /* Default margin value */
  
  @media (min-width: 768px) {
    margin-right: 40px; /* Increase the margin value for screens larger than 768px */
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="bg-gray-800 text-white p-4 flex justify-center shadow-md">
      <Logo>Temesgen A. Shonge</Logo>
      <Nav>
        <Link href="/" passHref><StyledLink className="mr-4 transition-colors duration-300 hover:text-blue-300">Home</StyledLink></Link>
        <Link href="#about" passHref><StyledLink className="mr-4 transition-colors duration-300 hover:text-blue-300">About Me</StyledLink></Link>
        <Link href="#projects" passHref><StyledLink className="mr-4 transition-colors duration-300 hover:text-blue-300">Projects</StyledLink></Link>
        <Link href="#skills" passHref><StyledLink className="mr-4 transition-colors duration-300 hover:text-blue-300">Skills</StyledLink></Link>
        <Link href="#contact" passHref><StyledLink className="transition-colors duration-300 hover:text-blue-300">Contact</StyledLink></Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
