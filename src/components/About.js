import React from "react";
import UserClass from "./UserClass";
import UserFunc from "./UserFunc";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentdidmount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="about px-5">
        <h1 className="text-center mb-5 text-4xl font-bold">
          About Page Class & Function!!
        </h1>
        <div className="user-cards flex space-x-5">
          <UserClass />
          <UserFunc name={"Sridharan func"} />
        </div>
      </div>
    );
  }
}

export default About;
