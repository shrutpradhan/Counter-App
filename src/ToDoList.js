import React from "react"
// import "./todo.css"

function ToDoList(props) {
    
    return (
    <>
    <div className="todo_Style"
         onClick={()=>{
         props.onSelect(props.id)
        }}
         > 
    <li>{props.text}</li>
    </div>
    </>
    )
}
export default ToDoList