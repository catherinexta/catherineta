import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import haneul from '../../common/images/haneul.jpg';

const styles = () =>
  createStyles({
    image: {
      maxHeight: '30em'
    }
  });

const About: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <Grid container spacing={16}>
      <Grid item>
        <img src={haneul} className={classes.image} />
      </Grid>
      <Grid item xs={3}>
        <h1>hello, i'm catherine,</h1>
        <p>some more text here about me?</p>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
