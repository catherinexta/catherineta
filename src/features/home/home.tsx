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

const Home: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={9}>
        <img src={haneul} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Home);
