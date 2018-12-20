import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { tileData } from './tile-data';
import PortfolioModal from './modal';

interface IPortfolioState {
  modalOpen: boolean;
  title: string;
  description: string;
  source: string;
}

class Portfolio extends React.Component {
  readonly state: IPortfolioState = {
    modalOpen: false,
    title: '',
    description: '',
    source: ''
  };

  handleOpen = (source: string, title: string, description: string) => {
    this.setState({
      modalOpen: true,
      title,
      description,
      source
    });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen, title, description, source } = this.state;

    return (
      <div>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Grid item xs={12} md={11}>
            <GridList cellHeight={200} cols={3}>
              {tileData.map((img, idx) => {
                return (
                  <GridListTile
                    key={img.source + idx}
                    cols={1}
                    // tslint:disable-next-line jsx-no-lambda
                    onClick={() =>
                      this.handleOpen(img.source, img.title, img.description)
                    }
                  >
                    <img src={img.source} />
                  </GridListTile>
                );
              })}
            </GridList>
          </Grid>
        </Grid>

        <PortfolioModal
          open={modalOpen}
          handleClose={this.handleClose}
          title={title}
          description={description}
          source={source}
        />
      </div>
    );
  }
}

export default Portfolio;
