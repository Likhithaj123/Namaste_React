

import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../../utils/UserContext";
class About extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
        <div>
        <h1>About Class Component </h1>
        <div>
            loggedInUser
            <UserContext.Consumer>
                {({ loggedInUser }) => <h2 className="text-xl font-bold">{loggedInUser}</h2>}
            </UserContext.Consumer>

        </div>
        <p>We are a team of food enthusiasts dedicated to bringing you the best dining experiences.</p>
        <p>Our mission is to help you discover new and exciting restaurants in your area.</p>
        
        <UserClass name={"Sanjay (class)"}
        location= {"Hyderabad"} />
        </div>
        );
    }
}



export default About;