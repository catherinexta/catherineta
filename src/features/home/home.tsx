import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import night from '../../common/images/night.jpg';

const styles = () => {
  const width = window.innerWidth;

  return createStyles({
    image: {
      maxHeight: width > 600 ? '30em' : (width * 2) / 3
    }
  });
};

const Home: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={1} sm={2} />
      <Grid item>
        <img src={night} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Home);
