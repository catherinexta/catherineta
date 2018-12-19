import * as React from 'react';

import { Link } from 'react-router-dom';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = () =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    link: {
      marginLeft: '1em'
    },
    name: {
      margin: 1,
      fontSize: '1.5em'
    }
  });

const Header = (props: WithStyles<typeof styles>) => {
  const { classes } = props;

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <h1 className={classNames(classes.grow, classes.name)}>catherine.ta</h1>

        <Link to="/" className={classes.link}>
          home
        </Link>

        <Link to="/about" className={classes.link}>
          about
        </Link>

        <Link to="/resume" className={classes.link}>
          resume
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
