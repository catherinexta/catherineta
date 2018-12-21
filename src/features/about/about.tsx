import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import roses from '../../common/images/roses.jpg';

const styles = () =>
  createStyles({
    image: {
      maxHeight: '30em'
    }
  });

const About: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <Grid container spacing={32}>
      <Grid item>
        <img src={roses} className={classes.image} />
      </Grid>
      <Grid item>
        <h1>hello, i'm catherine,</h1>
        <p>some more text here about me?</p>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
