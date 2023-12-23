import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  // Add your styles here
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Your Name</h1>
            <nav>
                <Link href="#about">About Me</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#contact">Contact</Link>
            </nav>
        </HeaderContainer>
    );
}