import React from 'react'
import { useState, useEffect } from 'react'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../app/apiSlice'

type todoType ={
    id: number,
    body: string,
}
export const Todolist = () => {

    const [todo, setTodo] = useState<todoType[] | undefined>()
    const [input, setInput] = useState<string | undefined>("")

    const handelSubmit = (e)=>{
        e.preventDefault()
        addTodo({body:input})
        setInput("")
    }

    const {
        data:todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery()

    const [addTodo] = useAddTodoMutation()
    const [deleteTodo] = useDeleteTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()
    

    return (
        <>
        
            <div className="app-container d-flex align-items-center justify-content-center flex-column">
                <h3>Todo App</h3>
                
                <div className="d-flex align-items-center mb-3">
                    <form action="" onSubmit={handelSubmit} style={{display:'flex', justifyContent:"center", alignItems:"center", gap:"10px"}}>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Enter a task here"
                            value={input}
                            onChange={(e)=> setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                            >
                            Save
                        </button>
                        <button type="button" className="btn btn-warning"  >
                        Get Tasks
                        </button>
                    </form>
                </div>
                <div className="table-wrapper">
                    <table className="table table-hover table-bordered" style={{minWidth:"600px"}}>
                        <thead>
                            <tr>
                            <th>No.</th>
                            <th>Todo item</th>
                            {/* <th>status</th> */}
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? <div>Loadgin...</div> : isError ? <div>{error}</div> : todos.map((elm:todoType)=>{
                                return(
                                    <tr>
                                        <td>{elm.id}</td>
                                        <td>{elm.body && elm.body.substring(0, 10)}...</td>
                                        <div className="action" style={{display:"flex", gap:"8px", justifyContent:"center"}}>
                                            <button onClick={() => deleteTodo(elm.id)}>Delete</button>
                                            <button>🗄</button>
                                            <button>🖌</button>
                                        </div>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )

}
