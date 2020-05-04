import React from "react";
import RocketCard from "./RocketCard";
import Loader from "./Loader";

export default class FetchRockets extends React.Component {
  state = {
    loading: true,
    rockets: null,
    limit: 2,
  };

  async componentDidMount() {
    const url = `https://api.spacexdata.com/v3/rockets?limit=${this.state.limit}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ rockets: data, loading: false });
    // console.log(this.state.rocket.rocket_name);
  }

  render() {
    if (this.state.loading) {
      // return <div>loading...</div>;
      return <Loader />;
    }

    if (!this.state.rockets) {
      return <div>didn't get a rocket</div>;
    }

    let rocketList = this.state.rockets.map((rocket) => {
      return (
        <RocketCard
          key={rocket.id}
          name={rocket.rocket_name}
          picture={rocket.flickr_images[0]}
          rocketId={rocket.rocket_id}
          description={rocket.description}
          wikipediaLink={rocket.wikipedia}
        />
      );
    });

    return (
      <div>
        {/* <RocketCard
          name={this.state.rocket.rocket_name}
          picture={this.state.rocket.flickr_images[0]}
          rocketId={this.state.rocket.rocket_id}
          description={this.state.rocket.description}
          wikipediaLink={this.state.rocket.wikipedia}
        /> */}
        {rocketList}
      </div>
    );
  }
}
