import React, { useState, useEffect } from 'react'
import Todo from "./Todo";

export default () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [todoName, setTodoName] = useState("");

    const handleUpdateTodo = (e, todo) => {
        e.preventDefault();

        setTodos([...todos.map(item => todo.id === item.id ? todo : item)]);
    }
    const handleDeleteTodo = (e, todoID) => {
        e.preventDefault();
        setTodos(todos.filter(item => todoID !== item.id))
    }
    const handleAddTodo = () => {
        const index = new Date().getTime();
        setTodos([...todos, { id: index, name: todoName }]);
        setTodoName("");
    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Id</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">update</th>
                            <th className="px-4 py-2">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <Todo todo={todo} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} index={index} key={index} />
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div className="custom-form" style={{ "display": "flex", "justifyContent": "space-between" }}>
                <input type="text" id="newTodo" className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded-full" value={todoName} onChange={e => setTodoName(e.target.value)} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full" onClick={handleAddTodo} disabled={todoName.length === 0}>Add Todo</button>
            </div>
        </div>
    )

}

