import styled from 'styled-components';

const ProjectsContainer = styled.div`
  // Add your styles here
`;

const ProjectCard = styled.div`
  // Add your styles here
`;

export default function Projects() {
    // Replace this with your actual projects data
    const projects = [
        {
            title: 'Project 1',
            description: 'Description for Project 1',
            technologies: ['Tech 1', 'Tech 2'],
            link: 'https://example.com/project-1',
        },
        // Add more projects here
    ];

    return (
        <ProjectsContainer>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Technologies: {project.technologies.join(', ')}</p>
                    <a href={project.link}>View Project</a>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
}