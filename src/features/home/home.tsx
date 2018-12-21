import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import night from '../../common/images/night.jpg';

const height = window.innerHeight;
// const width = window.innerWidth;

const styles = () =>
  createStyles({
    image: {
      maxWidth: (height * 2) / 3
    }
  });

const Home: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <div>
      <img src={night} className={classes.image} />
    </div>
  );
};

export default withStyles(styles)(Home);
