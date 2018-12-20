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
    navigation: {
      marginLeft: '1.5em'
    },
    name: {
      margin: 1,
      fontSize: '1.5em',
      fontFamily: 'Playfair Display',
      fontWeight: 700
    },
    appbar: {
      background: '#fff'
    },
    link: {
      textDecoration: 'none',
      borderBottom: 'solid 2px transparent',
      color: '#000',
      '&$visited': {
        textDecoration: 'none',
        borderBottom: 'solid 2px transparent',
        color: '#fff'
      },
      '&:hover': {
        textDecoration: 'line-through',
        textDecorationColor: '#931717'
      }
    }
  });

const Header = (props: WithStyles<typeof styles>) => {
  const { classes } = props;

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      className={classes.appbar}
    >
      <Toolbar>
        <Link
          to="/"
          className={classNames(classes.grow, classes.name, classes.link)}
        >
          catherine.ta
        </Link>

        <Link
          to="/about"
          className={classNames(classes.navigation, classes.link)}
        >
          about
        </Link>

        <Link
          to="/resume"
          className={classNames(classes.navigation, classes.link)}
        >
          resume
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
