import * as React from 'react';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Link to="/">catherine.ta</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
