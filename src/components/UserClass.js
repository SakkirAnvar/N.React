import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    console.log("Child Constructor");
    this.state = {
        userInfo:{
            name:"default",
            location:"default"

        }
    }
  }

 async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/SakkirAnvar")
    // const json = await data.json()

    // this.setState({
    //     userInfo: json
    // })

    this.timer = setInterval(()=>{
        console.log("Namaste React OP Class");
        
    },1000)

    console.log("Child Did Mount");
    
  }

  componentDidUpdate(){
    console.log("component did update");
    
  }


  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component will unmount");
    
  }
  render() {
    //console.log("Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
