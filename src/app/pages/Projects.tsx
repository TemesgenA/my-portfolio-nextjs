'use client'

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
        {
            title: 'Project 2',
            description: 'Description for Project 2',
            technologies: ['Tech 1', 'Tech 2'],
            link: 'https://example.com/project-2',
        },
        {
            title: 'Project 3',
            description: 'Description for Project 3',
            technologies: ['Tech 1', 'Tech 2'],
            link: 'https://example.com/project-3',
        },
        {
            title: 'Project 4',
            description: 'Description for Project 4',
            technologies: ['Tech 1', 'Tech 2'],
            link: 'https://example.com/project-4',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            technologies: ['Tech 1', 'Tech 2'],
            link: 'https://example.com/project-5',
        },
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