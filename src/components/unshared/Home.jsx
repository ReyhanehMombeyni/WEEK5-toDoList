import { useEffect, useState } from "react";
import axios from "axios";
import Add from "./Add"
import Items from "./Items"

const Home = () => {
  const [items, setItems]= useState([]);

  const getData= async () => {
    const res= await axios.get('https://dummyjson.com/todos')
    const {data}= res
    setItems(data.todos)
  }
  useEffect(()=> {
    getData()
    
  }, [])

  const deleteHandler = (id) => {
    const newItems= items.filter(item => item.id !== id);
    setItems(newItems)
  }

  const editHandler = (id) => {
    console.log(id);
    
  }




  return items ? (
    <div className="flex flex-col">
        <h1 className="text-4xl font-bold pb-10">toDo<span className="text-blue-400">List</span></h1>
        <Add items={items} setItems={setItems} />
        <Items items={items} deleteHandler={deleteHandler} editHandler={editHandler} />
    </div>
  ) : <h1>Loading...</h1>
  
}

export default Home