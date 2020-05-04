import React from "react";
import LaunchCard from "./LaunchCard";
import Loader from "./Loader";

// Grid
import Grid from "@material-ui/core/Grid";

export default class Launches extends React.Component {
  state = {
    loading: true,
    launches: null,
    limit: 4,
  };

  async componentDidMount() {
    const url = `https://api.spacexdata.com/v3/launches/past?launch_year=2020`;
    // const url = `https://api.spacexdata.com/v3/launches?limit=${this.state.limit}&launch_year=2019`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ launches: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if (!this.state.launches) {
      return <div>didn't get any launches</div>;
    }

    return (
      <div>
        <h1>Results: {this.state.launches.length}</h1>
        <Grid
          container
          style={{
            flexGrow: 1,
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {this.state.launches.map((launch) => (
                <Grid key={launch.flight_number} item>
                  <LaunchCard
                    name={launch.mission_name}
                    picture={
                      launch.links.flickr_images[0] ||
                      "https://live.staticflickr.com/65535/49673373182_93a517e140_o.jpg"
                    }
                    rocketId={launch.flight_number}
                    description={launch.details}
                    wikipediaLink={launch.links.wikipedia}
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
