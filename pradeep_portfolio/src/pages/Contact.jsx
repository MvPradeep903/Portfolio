import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 100%;
  background: var(--secondary);
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 1rem;
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    border-color: var(--accent);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: var(--secondary);
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 1rem;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    border-color: var(--accent);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: var(--accent);
  color: var(--primary);
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
  
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

const StatusMessage = styled.p`
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  color: ${props => props.$isError ? '#ff6b6b' : 'var(--accent)'};
`;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ContactSection>
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Get In Touch</h2>
          <Form ref={form} onSubmit={sendEmail}>
            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              required
            />
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status === 'success' && (
              <StatusMessage>Message sent successfully!</StatusMessage>
            )}
            {status === 'error' && (
              <StatusMessage $isError>Failed to send message. Please try again.</StatusMessage>
            )}
          </Form>

          <SocialLinks>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialLinks>
        </motion.div>
      </Content>
    </ContactSection>
  );
};

export default Contact;