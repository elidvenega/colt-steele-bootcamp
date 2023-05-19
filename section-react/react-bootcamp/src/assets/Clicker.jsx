function handleClick() {
    alert("Clicked the button!!");
}

export default function Clicker() {
    return (
        <>
        <p>Click The Button</p>
        <button onMouseOver={handleClick}>Click</button>
        </>
    )
}