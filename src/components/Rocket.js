import React from "react";
import RocketCard from "./RocketCard";
import Loader from "./Loader";

export default class Rocket extends React.Component {
  state = {
    loading: true,
    rocket: null,
  };

  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/rockets?limit=1";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
    this.setState({ rocket: data[0], loading: false });
    console.log(this.state.rocket.rocket_name);
  }

  render() {
    if (this.state.loading) {
      // return <div>loading...</div>;
      return <Loader />;
    }

    if (!this.state.rocket) {
      return <div>didn't get a rocket</div>;
    }

    return (
      <div>
        <RocketCard
          name={this.state.rocket.rocket_name}
          picture={this.state.rocket.flickr_images[0]}
          rocketId={this.state.rocket.rocket_id}
          description={this.state.rocket.description}
          wikipediaLink={this.state.rocket.wikipedia}
        />
      </div>
    );
  }
}
