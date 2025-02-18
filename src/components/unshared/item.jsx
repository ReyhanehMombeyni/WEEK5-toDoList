import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";


const Item = ({id, todo, completed, deleteHandler, editHandler}) => {    
    
  return (
    <div className="flex">
        <input type="checkbox" name="" id="" checked={completed} onChange={() => (!completed)} />
        <p>{todo}</p>
        <AiOutlineEdit onClick={() => editHandler(id)} />
        <AiFillDelete onClick={() => deleteHandler(id)}/>
    </div>
  )
}

export default Item
