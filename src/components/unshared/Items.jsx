import Item from "./item";

const Items = ({items, deleteHandler, editHandler}) => {

  return (
    <div className="flex flex-col gap-10 items-center">
      {
        items.map((item) => {
          return <Item key={item.id} {...item} deleteHandler={deleteHandler} editHandler={editHandler} />
        }) 
        
      }
      {console.log(items)
      }

    </div>
    
  )
}

export default Items