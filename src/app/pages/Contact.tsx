'use client'

import styled from 'styled-components';
import React from 'react';

const ContactContainer = styled.div`
  // Add your styles here
`;

export default function Contact() {
    return (
        <ContactContainer>
            <h2>Contact</h2>
            <p>Email: your-email@example.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/yourusername">yourusername</a></p>
            <p>GitHub: <a href="https://github.com/yourusername">yourusername</a></p>
            {/* Add a contact form here if you want */}
        </ContactContainer>
    );
}