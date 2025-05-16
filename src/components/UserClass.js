import React from 'react';


class UserClass extends React.Component {
   constructor(props) {
    super(props);
    this.state={
        userInfo: {
            name: "Dummy",
            location: "Dummy",
            avatar_url:"image.png",
            bio: "Dummy",
    
        }
    };
    };
 async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sanjaynalamasa");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  render() {
    const {name, location,bio, avatar_url} = this.state.userInfo;
  
    return (
      <div className="user-card">
       <img src={avatar_url} alt="avatar" className="user-avatar" />
        <h1>Name: {name}</h1>
        <h3>Location:{location}</h3>
        <h4>Bio: {bio}</h4>
        
      </div>
    );
  }
}


export default UserClass;