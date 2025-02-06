import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import cm_gif from '../assets/cm_gif.gif';
import gs_gif from '../assets/gs_gif.gif';
import sc_gif from '../assets/sc_gif.gif';
const ProjectsSection = styled.section`
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--secondary);
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    h3 {
      color: var(--accent);
      margin-bottom: 1rem;
    }
    
    p {
      margin-bottom: 1rem;
      color: var(--text-secondary);
      flex: 1;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  
  span {
    background: rgba(100, 255, 218, 0.1);
    color: var(--accent);
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.875rem;
  }
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  margin-top: auto;
  
  &:hover {
    color: var(--accent);
  }
  
  svg {
    font-size: 1.25rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Construction Mart",
      description: "Developed a construction materials marketplace web application with role-based authentication, dynamic dashboards, and state management. Enabled customer purchases and managerial oversight with user-specific views." ,
      image: cm_gif,
      tags: ["ReactJS", "NodeJS","ExpressJS", "MongoDB", "Redux Toolkit","Bootstrap"],
      github: "https://github.com/yourusername/ai-chat"
    },
    {
      title: "Grievance Management System",
      description: " Developed a user-friendly web application to handle and resolve parent grievances across multiple school branches, streamlining communication and tracking resolutions.",
      image: gs_gif,
      tags: ["ReactJS", "NodeJS","ExpressJS", "MongoDB", "Redux Toolkit","Bootstrap"],
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Smart City App",
      description: "Developed a Smart City app in ReactJS to find nearby places like supermarkets, malls, food spots, and more, with location-based search and category filters. Integrated Geoapify and Google Maps APIs",
      image: sc_gif,
      tags: ["ReactJS","Google API","Geoapify","CSS"],
      github: "https://github.com/yourusername/ml-portfolio"
    }
  ];

  return (
    <ProjectsSection>
      <Content>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Tags>
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </Tags>
                <GithubLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View on GitHub
                </GithubLink>
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </ProjectsSection>
  );
};

export default Projects;