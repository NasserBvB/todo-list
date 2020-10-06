import React, { useState } from 'react'

const Todo = (props) => {
    const [todo, setTodo] = useState(props.todo);
    const [modifying, setModifying] = useState(false);
    return (
        <tr key={props.index}>
            {
                !modifying && (
                    <>
                        <td className="px-4 py-2">{todo && todo.id}</td>
                        <td className="px-4 py-2">{todo && todo.name}</td>
                        <td className="px-4 py-2">
                            <a onClick={e => { setModifying(!modifying) }} style={{ "cursor": "pointer", "color": "blueviolet" }}>
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                            </a>
                        </td>
                        <td className="px-4 py-2">
                            <a onClick={e => props.handleDeleteTodo(e, todo.id)} style={{ "cursor": "pointer", "color": "red" }}>
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </a>
                        </td>
                    </>
                )
            }
            {
                modifying && (
                    <>
                        <td className="px-4 py-2">{todo && todo.id}</td>
                        <td className="px-4 py-2">
                            <input value={todo.name} onChange={e => setTodo({ ...todo, name: e.target.value })} />
                        </td>
                        <td className="px-4 py-2">
                            <a onClick={e => { props.handleUpdateTodo(e, todo); setModifying(!modifying) }} style={{ "cursor": "pointer", "color": "blueviolet" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" ><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </a>
                            <a onClick={e => { setModifying(!modifying) }} style={{ "cursor": "pointer", "color": "blueviolet" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" ><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                            </a>
                        </td>
                        <td className="px-4 py-2">
                            <a onClick={e => props.handleDeleteTodo(e, todo.id)} style={{ "cursor": "pointer", "color": "red" }}>
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" ><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </a>
                        </td>
                    </>
                )
            }
        </tr>
    )

}

export default Todo;
