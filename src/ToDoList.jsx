import React from 'react'

export default function ToDoList(props) {
  return (
    <ul className='list-group'>
        {
            props.list.map((data, index) => {
                return (
                    <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                        {data}
                        <span onClick={() => props.removeItem(index)} className='badge text-bg-primary rounded-pill'>Delete</span>

                    </li>
                )
            })
        }

    </ul>
  )
}
