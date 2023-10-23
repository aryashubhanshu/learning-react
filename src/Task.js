export const Task = (props) => {
    return (
        <div  style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)} style={{marginLeft: "10px"}}>x</button>
        </div>
    )
};