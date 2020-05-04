import React from "react";
import RocketCard from "./RocketCard";
import Loader from "./Loader";

// Grid
import Grid from "@material-ui/core/Grid";

export default class FetchRocketsGrid extends React.Component {
  state = {
    loading: true,
    rockets: null,
    limit: 4,
  };

  async componentDidMount() {
    const url = `https://api.spacexdata.com/v3/rockets?limit=${this.state.limit}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ rockets: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if (!this.state.rockets) {
      return <div>didn't get a rocket</div>;
    }

    return (
      <div>
        <Grid
          container
          style={{
            flexGrow: 1,
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {this.state.rockets.map((rocket) => (
                <Grid key={rocket.rocket_id} item>
                  <RocketCard
                    name={rocket.rocket_name}
                    picture={rocket.flickr_images[0]}
                    rocketId={rocket.rocket_id}
                    description={rocket.description}
                    wikipediaLink={rocket.wikipedia}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
