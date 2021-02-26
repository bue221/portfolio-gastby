import React, { useState, useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';

import { Animated, LinkList, CardProject, ContactProject } from 'components';

import header from '../../images/Header.svg';

import content from './content';
import useProjects from './useProjects';
import styles from './style';

const { tagline, title, subtitle, links, secondTitle } = content;

const Welcome = ({ classes }) => {
  const { projects } = useProjects();
  const [scroll, setScroll] = useState(false);
  const refDivProject = useRef();

  const handleScroll = () => {
    const div = refDivProject.current;
    const { y } = div.getBoundingClientRect();

    console.log(y);
    y < 100 && setScroll(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.header}>
        <Grid item sm={6} xs={12}>
          <Typography variant='h3' color='textPrimary'>
            {tagline}
          </Typography>
          <Fade in timeout={1000}>
            <Typography variant='h1' color='textPrimary'>
              <Animated>{title}</Animated>
            </Typography>
          </Fade>
          <Typography variant='h3' color='textPrimary'>
            {subtitle}
          </Typography>
          <LinkList links={links} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <div>
            <img src={header} alt='logo' width='320vw' />
          </div>
        </Grid>
      </Grid>
      <div className={classes.header} ref={refDivProject} id='projects'>
        <Fade in timeout={5000}>
          <Typography variant='h1' color='textPrimary'>
            <Animated>{secondTitle}</Animated>
          </Typography>
        </Fade>
        <Zoom in={!!projects} timeout={8000}>
          <div className={classes.projectsDiv}>
            {projects.edges.map(({ node }) => (
              <>
                <CardProject {...node} />
              </>
            ))}
          </div>
        </Zoom>
      </div>
      <div id='contact'>
        <ContactProject />
      </div>
    </>
  );
};
export default withStyles(styles)(Welcome);
