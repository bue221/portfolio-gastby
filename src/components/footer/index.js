import React from 'react';
import { withStyles } from '@material-ui/styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import LinkList from '../link-list';

import styles from './style';

const links = [
  {
    to: 'https://github.com/bue221',
    text: 'bue221',
    Icon: FaGithub,
    newTab: true,
  },
  {
    to:
      'https://www.linkedin.com/in/andr%C3%A9s-camilo-plaza-jim%C3%A9nez-679654196/',
    text: 'Linkedin',
    Icon: FaLinkedin,
    newTab: true,
  },
];

type Props = {
  classes: Object,
};

const Footer = ({ classes }: Props) => (
  <footer className={classes.container}>
    <div>
      <LinkList links={links} />
    </div>
    <div className={classes.Date}>
      © {new Date().getFullYear()}, Andres Camilo Plaza Jimenez
    </div>
  </footer>
);

export default withStyles(styles)(Footer);
