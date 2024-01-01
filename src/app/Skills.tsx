import styled from 'styled-components';
import Link from 'next/link';

const SkillsContainer = styled.div`
  // Add your styles here
`;

export default function Skills() {
    // Replace this with your actual skills data
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'SQL',
        'TypeScript',
        'Kotlin',
        'Android Development',
    ];

    return (
        <SkillsContainer>
            <h2>Skills</h2>
            <Link href="/">Go back to home page</Link>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </SkillsContainer>
    );
}