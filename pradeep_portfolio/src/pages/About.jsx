import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb,SiFormik,SiMongoose,SiRedux } from 'react-icons/si';
import { SiJavascript,SiCss3,SiHtml5 , SiExpress} from 'react-icons/si';

const AboutSection = styled.section`
  min-height: 100vh;  
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TimelineSection = styled.div`
  flex: 1;
  position: relative;
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: var(--accent);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent);
  }
`;

const EducationCard = styled.div`
  background: var(--secondary);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent);
`;

const EducationContent = styled.div`
  h5 {
    margin-bottom: 0.4rem;
  }

  h4 {
    color: var(--accent);
    margin-bottom: 0.3rem;
  }

  p {
    margin: 0.25rem 0;
    color: var(--text-secondary);
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const CodingPlatforms = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const PlatformCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--secondary);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--accent);
  }

  span {
    color: var(--text-primary);
    font-size: 0.9rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: var(--secondary);
  border-radius: 8px;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
    color: var(--accent);
  }

  span {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  color: var(--accent);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const About = () => {
  const education = [
    {
      degree: "Bachelor of Science",
      major: "MPC",
      institution: "Dr.B.R.Ambedkar Open University, Hyderabad",
      period: "2020 - 2023",
      description: "CGPA: 7.54/10"
    },
    {
      degree: "Board of Intermediate Education, Andhra Pradesh",
      major: "MPC",
      institution: "Narayana Junior College , Razole",
      period: "2017 - 2019",
      description: "Percentage: 90%"
    },
    {
      degree: "Board of Secondary Education, Andhra Pradesh",
      major: "General",
      institution: "Bhashyam Public School , Tatipaka",
      period: "2016-2017",
      description: "CGPA - 9.5"
    }
  ];

  // const platforms = [
  //   { icon: <SiLeetcode />, name: "LeetCode", url: "https://leetcode.com/yourusername" },
  //   { icon: <SiCodechef />, name: "CodeChef", url: "https://codechef.com/users/yourusername" },
  //   { icon: <SiCodeforces />, name: "CodeForces", url: "https://codeforces.com/profile/yourusername" }
  // ];

  const skills = [
    { icon: <SiHtml5 />, name: 'Html' },
    { icon: <SiCss3 />, name: 'CSS3' },
    { icon: <SiJavascript />, name: 'Javascript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <SiMongoose />, name: 'Mongoose' },
    { icon: <SiFormik />, name: 'Formik' }
  ];

  return (
    <AboutSection>
      <Content>
        <TimelineSection>
          <SectionTitle>Education Timeline</SectionTitle>
          {education.map((edu, index) => (
            <TimelineItem key={index}>
              <EducationCard>
                <EducationContent>
                  <h4>{edu.institution}</h4>
                  <h5>{edu.major}</h5>
                  <p>{edu.degree}</p>
                  <p>{edu.period}</p>
                  <p>{edu.description}</p>
                </EducationContent>
              </EducationCard>
            </TimelineItem>
          ))}
        </TimelineSection>

        <RightSection>
          <div>
            {/* <SectionTitle>Coding Platforms</SectionTitle> */}
            {/* <CodingPlatforms>
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.icon}
                  <span>{platform.name}</span>
                </PlatformCard>
              ))}
            </CodingPlatforms> */}
          </div>

          <div>
            <SectionTitle>Experience</SectionTitle>

            <EducationContent>
              <EducationCard>
              <h4>MERN Stack Developer Intern At EduPoly </h4>
              <p>- Developed and deployed web applications using ReactJS, NodeJS, Express, and MongoDB.</p>
              <p>- Designed responsive pages and integrated APIs with Axios.</p>
              <p>- Utilized Redux Toolkit for state management and React hooks for dynamic functionality.</p>
              </EducationCard>
            </EducationContent>
            <SectionTitle>Skills</SectionTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        </RightSection>
      </Content>
    </AboutSection>
  );
};

export default About;

// import '../styles/About.css';
// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
// import { SiMongodb, SiSpringboot, SiTensorflow } from 'react-icons/si';
// import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

// // Use classNames for elements
// const About = () => {
//   // Same data and JSX structure as before
//   const education = [
//         {
//           degree: "Bachelor of Technology",
//           major: "Computer Science",
//           institution: "KL University",
//           period: "2021 - 2025",
//           description: "CGPA: 9.2/10"
//         },
//         {
//           degree: "Higher Secondary",
//           major: "MPC",
//           institution: "Narayana",
//           period: "2019 - 2021",
//           description: "Percentage: 95%"
//         },
//         {
//           degree: "Secondary School",
//           major: "General",
//           institution: "Narayana School",
//           period: "2019",
//           description: "GPA: 10/10" 
//         }
//       ];
    
//       const platforms = [
//         { icon: <SiLeetcode />, name: "LeetCode", url: "https://leetcode.com/yourusername" },
//         { icon: <SiCodechef />, name: "CodeChef", url: "https://codechef.com/users/yourusername" },
//         { icon: <SiCodeforces />, name: "CodeForces", url: "https://codeforces.com/profile/yourusername" }
//       ];
    
//       const skills = [
//         { icon: <FaReact />, name: 'React' },
//         { icon: <FaNodeJs />, name: 'Node.js' },
//         { icon: <SiMongodb />, name: 'MongoDB' },
//         { icon: <FaJava />, name: 'Java' },
//         { icon: <SiSpringboot />, name: 'Spring Boot' },
//         { icon: <FaPython />, name: 'Python' },
//         { icon: <SiTensorflow />, name: 'TensorFlow' }
//       ];
    
//   return (
//     <section className="AboutSection">
//       <div className="Content">
//         <div className="TimelineSection">
//           <h2 className="SectionTitle">Education</h2>
//           {education.map((edu, index) => (
//             <div className="TimelineItem" key={index}>
//               <div className="EducationCard">
//                 <div className="EducationContent">
//                   <h3>{edu.degree}</h3>
//                   <h4>{edu.major}</h4>
//                   <p>{edu.institution}</p>
//                   <p>{edu.period}</p>
//                   <p>{edu.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="RightSection">
//           <div>
//             <h2 className="SectionTitle">Coding Platforms</h2>
//             <div className="CodingPlatforms">
//               {platforms.map((platform, index) => (
//                 <a
//                   className="PlatformCard"
//                   href={platform.url}
//                   key={index}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {platform.icon}
//                   <span>{platform.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="SectionTitle">Skills</h2>
//             <div className="SkillsGrid">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   className="SkillCard"
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {skill.icon}
//                   <span>{skill.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
