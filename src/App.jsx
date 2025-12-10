import React, { useRef, useState } from 'react'
import ToDoList from './ToDoList'

export default function App() {

  const inputRef = useRef()
  const [list, setList] = useState([]);

  function addItem() {
    let value = inputRef.current.value.trim();
    if (value == "") return alert("Input Value empty")
    setList([...list, value])
    inputRef.current.value = ""
  }


  function removeItem(removeItem) {
    const newArray = list.filter((d, i) => {
      if (i != removeItem) {
        return true
      }
    })

    setList(newArray)
  }




  return (
    <div style={{
      minHeight: '400px', maxWidth: "700px"
    }} className='my-4 shadow mx-auto px-4 py-3'>
      <div className='input-group mb-3'>
        <input ref={inputRef} type="text" className='from-control' placeholder='ToDo List Add.......' />
        <span onClick={addItem} className='input-group-text'>Add</span>
      </div>
      <ToDoList list={list} removeItem={removeItem} />

    </div>
  )
}
