import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () =>
  createStyles({
    section: {
      minHeight: '100%'
    },
    date: {
      textAlign: 'right',
      fontSize: '1em',
      fontStyle: 'oblique',
      marginBottom: '4px',
      fontWeight: 500,
      marginLeft: '2em',
      marginTop: '0',
      display: window.innerWidth < 600 ? 'none' : 'block'
    }
  });

const Resume = (props: WithStyles<typeof styles>) => {
  const { classes } = props;

  return (
    <Grid container spacing={8} direction="column">
      <Grid item xs={12} className={classes.section} container spacing={32}>
        <Grid item xs={12}>
          <h1>Work Experience</h1>
        </Grid>

        <Grid
          container
          spacing={8}
          justify="space-between"
          item
          xs={12}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={8}>
            <h2>Software Developer</h2>
          </Grid>

          <Grid item sm={4}>
            <h2 className={classes.date}>June 2018 - Present</h2>
          </Grid>

          <Grid item xs={12}>
            <h3>
              <a href="http://simoncomputing.com">Simon Computing</a> -
              Alexandria, Virginia
            </h3>
            <p>
              Develop core skills on the full stack using React and Sprint Boot,
              with an emphasis on the front-end. Designed and implemented an
              internal candidate tracking system to accomodate the hiring
              process. System allows management of candidates, open positions,
              interview questions, and schedules. Built an administrative
              licensing application for a mobile passport scanning app,{' '}
              <a href="http://blacksharktech.com/#products">Xavier</a>.
              Established a company-standardized boilerplate for ReactTS and
              ReactJS applications with reusable components. Prepared tutorials
              and documentation on React and Redux.
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={8}
          justify="space-between"
          item
          xs={12}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={8}>
            <h2>Digital Technology Leadership Program Intern</h2>
          </Grid>

          <Grid item sm={4}>
            <h2 className={classes.date}>June 2017 - August 2017</h2>
          </Grid>

          <Grid item xs={12}>
            <h3>GE Digital - San Ramon, California</h3>
            <p>Something here about the job</p>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={8}
          justify="space-between"
          item
          xs={12}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={8}>
            <h2>Web Development Intern</h2>
          </Grid>

          <Grid item sm={4}>
            <h2 className={classes.date}>June 2016 - July 2016</h2>
          </Grid>

          <Grid item xs={12}>
            <h3>Simon Computing - Alexandria, Virginia</h3>
            <p>Something here about the job</p>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.section} container spacing={32}>
        <Grid item xs={12}>
          <h1>Other Professional Experience</h1>
        </Grid>

        <Grid item xs={12}>
          <h2>Teaching Assistant</h2>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.section} container spacing={32}>
        <Grid item xs={12}>
          <h1>Education</h1>
        </Grid>

        <Grid item xs={12}>
          <h2>2018 B.S. Computer Science</h2>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Resume);
