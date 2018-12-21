import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import roses from '../../common/images/roses.jpg';

const styles = () =>
  createStyles({
    image: {
      width: '100%',
      height: 'auto'
    }
  });

const About: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <Grid container spacing={32} justify="center">
      <Grid item xs={12} md={4}>
        <img src={roses} className={classes.image} />
      </Grid>
      <Grid item xs={12} md={6}>
        <h1>hi, i'm catherine.</h1>
        <p>
          I'm currently a software developer at Simon Computing in Alexandria,
          Virginia. Though I often develop on the full stack, my passion lies in
          creating simple, yet innovative user interfaces. I always strive to
          expand my knowledge on front end development and user experience
          design.
        </p>

        <p>
          In my free time, I like to pursue creative outlets, such as drawing
          and editing travel videos. I also enjoy watching films in theater - in
          the last year, I've viewed least fifteen movies in theaters.
        </p>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
