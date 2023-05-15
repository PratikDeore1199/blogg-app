const Button = (props) =>{
    return (
        <button onClick={props.onClick} style={{backgroundColor: props.color, opacity:0.9 }} className={`p-2 min-w-[80px] text-white text-lg border rounded shadow`}>{props.text}</button>
    )
}

export default Button;