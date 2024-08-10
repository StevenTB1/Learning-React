import profilePic from './assets/mario-pfp-03.jpg'
function Card(){
    return (
        <div className="card">
            <img className = "card-image" src={profilePic} alt="profile picture"/>
            <h2 className ="card-title">Steven Here</h2>
            <p className='card-text'>I'm a student and I like playing video games</p>
        </div>
    );
}

export default Card;