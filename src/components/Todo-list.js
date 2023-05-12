import {useState} from 'react'
import styles from './Todo-list.module.css'
export function Todolist(){
    const [newitem,setnewItem]=useState("")
    const [items,setItem]=useState([])

    function addItem(){
        if(!newitem){
            alert('please enter the items')
            return
        }
       const item={
        id:Math.floor(Math.random()*10)+10,
        value:newitem
       }
       setItem(oldlist=>[...oldlist,item])
       setnewItem("")
       console.log(items)
      
    }

    function deleteItems(id){
         const newArray=items.filter(elem=>elem.id!==id)
         setItem(newArray)
        
    }
    return (
        <div className={styles.parent}>
            <div className={styles.child}>
            <h1>Pending Task </h1>

            <ul>
                {items.map((elem)=>{
                    return <li key={elem.id}>{elem.value} <button className={styles.btn} onClick={()=>deleteItems(elem.id)}>X</button></li>
                })}
            </ul>
            <input type="text" value={newitem} placeholder="Add a new Task"  
              onChange={(e)=>setnewItem(e.target.value)}/>
            <button onClick={addItem} className={styles.btn1}>Add item</button>
           
            </div>
        </div>
    )
}