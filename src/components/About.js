import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedUser})=> <h1>{loggedUser}</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"Shakir"} />
        {/* <UserClass /> */}
      </div>
    );
  }
}

export default About;
