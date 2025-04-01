import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "no name",
        location: "no location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sridharchetty");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // this.timer = setInterval(() => {
    //   console.log("Set Inverval Started");
    // }, 1000);
  }
  componentDidUpdate() {
    // console.log("componentdidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Set Interval Stopped");
  }
  render() {
    const { count, name, location } = this.state.userInfo;
    return (
      <div className="rounded border p-3 space-y-3">
        <h2>Name: {name}</h2>
        <h3>Place: {location}</h3>
        <h4>Contact: sridharan425@gmai.com</h4>
      </div>
    );
  }
}

export default UserClass;
