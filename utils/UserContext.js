import React from 'react';


const UserContext = React.createContext({
    loggedInUser: "Default User",
});


export default UserContext;