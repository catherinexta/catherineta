import * as React from 'react';

import { Link } from 'react-router-dom';
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = (theme: Theme) =>
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
      '&:hover': {
        textDecoration: 'line-through',
        textDecorationColor: theme.palette.primary.main
      }
    }
  });

const Header: React.SFC<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      className={classes.appbar}
    >
      <Toolbar>
        <span className={classes.grow}>
          <Link to="/" className={classNames(classes.name, classes.link)}>
            catherine.ta
          </Link>
        </span>

        <Link
          to="/about"
          className={classNames(classes.navigation, classes.link)}
        >
          about
        </Link>

        <Link
          to="/portfolio"
          className={classNames(classes.navigation, classes.link)}
        >
          portfolio
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
