import { FaGithub, FaLinkedin } from 'react-icons/fa';

const content = {
  tagline: 'Hi Im',
  title: 'Andrés Plaza',
  subtitle: 'systems engineer and Web developer!',
  links: [
    {
      to: 'https://github.com/bue221',
      text: 'bue221',
      Icon: FaGithub,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/andr%C3%A9s-camilo-plaza-jim%C3%A9nez-679654196/',
      text: 'Linkedin',
      Icon: FaLinkedin,
      newTab: true,
    },
  ],
};

export default content;
