import React from "react";

class UserClass extends React.Component {
  // accepting the props
  constructor(props) {
    super(props);

    // creating state  variable
    this.state = {
      count: 0,
      userData: { name: "Dummy" },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RaHuL342319");
    const json = await data.json();
    this.setState({
      userData: json,
    });
  }
  render() {
    // const { name, location } = this.props;
    const { userData } = this.state;
    return (
      <div className="user-card">
        {/* <h1>count : {count}</h1>
        <button
          onClick={() => {
            // Never update state variable directly this.state.count += 1
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button> */}
        <h2>Name: {userData.name}</h2>
        <img src={userData.avatar_url} />
        <h3>Location: {userData.location}</h3>
        <h4 className="link">
          Contact:
          <a href={`https://twitter.com/${userData.twitter_username}`}>
            @{userData.twitter_username}
          </a>
        </h4>

        <h4 className="link">
          Blog:
          <a href={userData.blog}> {userData.blog}</a>
        </h4>
      </div>
    );
  }
}

export default UserClass;
