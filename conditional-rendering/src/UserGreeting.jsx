import propTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginprompt = <h2 className="login-prompt">Please log in to continue.</h2>;
    return(props.isLoggedIn ? welcomeMessage : loginprompt);
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "guest",
}

export default UserGreeting;