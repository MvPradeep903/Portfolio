import styled from 'styled-components';
import { motion } from 'framer-motion';
import pradeep_img from '../assets/pradeep_image.jpg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const HeroSection = styled.section`
  margin:auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background:  var(--primary);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    padding: 0;
  }
`;

const TextContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    margin-bottom: 1rem;
    font-family: "Bebas Neue";
    font-weight: 400;
    font-style: normal;
    margin-top : 20px
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    font-family: "Bebas Neue", serif;
  font-weight: 400;
  font-style: normal;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  border: 2px solid var(--accent);
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: left;
  width:max-content;
  @media(max-width:768px){
    justify-content: center;
    margin:auto;
  }
  a {
    font-size: 1.5rem;
    color: var(--text-primary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--accent);
      transform: translateY(-2px);
    }
  }
`;

export const Home = () => {
  return (
    <>
      <HeroSection>
        <Content>
          <TextContent
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1>Hi, I'm Pradeep</h1>
            <p>Mern Stack Developer</p>
            <p>To grow as a Full-Stack Developer by using my skills in ReactJS and ExpressJS to build reliable 
applications, work well with teams, contribute to the organization’s success, and continuously 
learn new technologies to improve my technical expertise. </p>
            <button>Contact Me</button>
            <SocialLinks>
              <a href="https://github.com/MvPradeep903" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/javvadi-mani-venkata-pradeep-0544bb324/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </SocialLinks>
          </TextContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center' }}>
            <ProfileImage src={pradeep_img} alt="Profile" />
            {/* <ProfileImage src="https://media.licdn.com/dms/image/v2/D5603AQHWPnuNLIn0MQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1674667829526?e=1741824000&v=beta&t=NFF-GUtBcnKqZkOZi0gDAwccE0D4cjQL9MMn7mNdlxw" alt="Profile" /> */}
          </motion.div>
        </Content>
      </HeroSection>

    </>
  );
};