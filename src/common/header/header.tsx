import * as React from 'react';

import { Link } from 'react-router-dom';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = () =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  });

const Header = (props: WithStyles<typeof styles>) => {
  const { classes } = props;

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Link to="/" className={classes.grow}>
          catherine.ta
        </Link>

        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/resume">resume</Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
