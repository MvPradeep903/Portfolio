import styled from 'styled-components';
import { motion } from 'framer-motion';

const AchievementsSection = styled.section`
  min-height: 100vh;
  padding: 100px 150px;
  border:1px solid white;
  
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: var(--secondary);
  border-radius: 8px;
  overflow: hidden; 
  ${'' /* width: 300px; */}
  
  img {
    width: 100%;
    height: 200px;
    object-fit: contain; /* Ensures the image fits inside the card without distortion */
    background: #f4f4f4; /* Optional: Adds a light background to better display smaller images */
    padding: 10px; /* Optional: Adds padding for better visibility of the entire image */
  }
  
  .content {
    padding: 1.5rem;
    
    h3 {
      color: var(--accent);
      margin-bottom: 1rem;
    }
    
    a {
      display: inline-block;
      margin-top: 1rem;
    }
  }
`;


const PublicationsSection = styled.div`
  margin-top: 4rem;
  
  .publication-card {
    background: var(--secondary);
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
  }
`;

const Achievements = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      image: "https://saibhagavan.netlify.app/img/certificates/cp_32454.png",
      link: "#"
    },
    {
      title: "AWS Developer -Associate",
      image: "https://saibhagavan.netlify.app/img/certificates/developer_32454.png",
      link: "#"
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      image: "https://images.credly.com/size/680x680/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png",
      link: "#"
    },
    {
      title: "Google Data Analytics",
      image: "/path-to-cert-image.jpg",
      link: "#"
    },
    {
      title: "Google Data Analytics",
      image: "/path-to-cert-image.jpg",
      link: "#"
    },
    // Add more certifications
  ];

  return (
    <AchievementsSection>
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Certifications</h2>
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img src={cert.image} alt={cert.title} />
                <div className="content">
                  <h4>{cert.title}</h4>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </div>
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </motion.div>

        <PublicationsSection
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Publications</h2>
          <div className="publication-card">
            <h3>Research Paper Title</h3>
            <p>Published in: Journal Name</p>
            <p>Year: 2023</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read Paper
            </a>
          </div>
        </PublicationsSection>
      </Content>
    </AchievementsSection>
  );
};

export default Achievements;