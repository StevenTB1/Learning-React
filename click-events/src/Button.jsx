
function Button(){

    let count = 0;

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);
}

export default Button;