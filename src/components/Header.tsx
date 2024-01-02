import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  // Add your styles here
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Temesgen A. Shonge</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="#about">About Me</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#contact">Contact</Link>
            </nav>
        </HeaderContainer>
    );
}