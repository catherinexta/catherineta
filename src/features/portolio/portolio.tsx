import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import haechan from '../../common/images/haechan.png';

const styles = () =>
  createStyles({
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  });

const Portfolio = (props: WithStyles<typeof styles>) => {
  const { classes } = props;

  return (
    <Grid container spacing={0} direction="column">
      <Grid item xs={12} container spacing={0} direction="row" justify="center">
        <Grid item xs={12} md={4}>
          <img src={haechan} className={classes.img} />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={haechan} className={classes.img} />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={haechan} className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Portfolio);
