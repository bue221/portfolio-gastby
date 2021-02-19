import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import { Animated, LinkList } from 'components';

import header from '../../images/Header.svg';

import content from './content';

const { tagline, title, subtitle, links } = content;

const Welcome = () => (
  <>
    <Grid container justify='center' alignItems='center' spacing={5}>
      <Grid item sm={6}>
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
      <Grid item sm={6}>
        <div>
          <img src={header} alt='logo' width='320vw' />
        </div>
      </Grid>
    </Grid>
  </>
);

export default Welcome;
