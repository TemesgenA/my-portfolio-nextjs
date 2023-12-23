import styled from 'styled-components';

const SkillsContainer = styled.div`
  // Add your styles here
`;

export default function Skills() {
    // Replace this with your actual skills data
    const skills = ['Skill 1', 'Skill 2', 'Skill 3'];

    return (
        <SkillsContainer>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </SkillsContainer>
    );
}