import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import styles from './style';
import { Link } from '@material-ui/core';

type Props = {
  classes: Object,
  data: Object,
};

const cardProject = ({ classes, img, name, repositorio, website }: Props) => (
  <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img.file.url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnsBox}>
        {website && (
          <Button
            size='small'
            color='primary'
            component={Link}
            href={website}
            target='_blank'>
            Website
          </Button>
        )}
        <Button
          size='small'
          color='secondary'
          component={Link}
          href={repositorio}
          target='_blank'>
          Repository
        </Button>
      </CardActions>
    </Card>
  </>
);

export default withStyles(styles)(cardProject);
