
function ProfilePicture(){
    const imageUrl = './public/mario-pfp-03.jpg';

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return (<img src = {imageUrl} onClick={(e) => handleClick(e)}></img>);
}

export default ProfilePicture;