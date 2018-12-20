import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

interface IPortfolioModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  source: string;
}

const styles = () =>
  createStyles({
    modal: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto'
    },
    image: {
      maxWidth: '100%',
      maxHeight: '25em',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    title: {
      textDecorationColor: '#dda455',
      display: 'inline-block',
      borderBottom: '1px solid #dda455',
      paddingBottom: 2
    }
  });

const PortfolioModal = (
  props: IPortfolioModalProps & WithStyles<typeof styles>
) => {
  const { classes } = props;

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      className={classes.modal}
    >
      <Card>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <img
                src={props.source}
                alt={props.title}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12}>
              <h3 className={classes.title}>{props.title}</h3>
              <p>{props.description}</p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default withStyles(styles)(PortfolioModal);
