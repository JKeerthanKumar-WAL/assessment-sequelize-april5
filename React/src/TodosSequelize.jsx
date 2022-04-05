import { useState, useEffect } from 'react';
import axios from 'axios';

const TodosSequelize = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = () => {
        axios
            .get('/todos')
            .then((res) => {
                setTodos(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getTodos();
    }, []);
    const createTodo = (event) => {
        event.preventDefault();
        const todoObject = {
            title: event.target.title.value,
            status: event.target.status.value,
            description: event.target.description.value,
        };
        axios
            .post('/todos/create', todoObject)
            .then((res) => {
                console.log(res.data);
                getTodos();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">Todo App</h1>
            <form className="form-group" onSubmit={createTodo}>
                <b className="subHeading">Title : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="text"
                    name="title"
                    placeholder="Enter Todo Title"
                />
                <br />
                <b className="subHeading">Status : </b>
                <select
                    className="form-select d-inline-flex w-50"
                    name="status"
                >
                    <option selected>Select</option>
                    <option value="1">Complete</option>
                    <option value="0">Incomplete</option>
                </select>
                <br />
                <b className="subHeading">Description : </b>
                <textarea
                    className="form-select d-inline-flex w-50"
                    name="description"
                />
                <br />
                <button className="btn btn-outline-primary">
                    <b>Add Todo</b>
                </button>
                <br />
            </form>
            <div className="table table-bordered table-striped text-center">
                <table className="table-data text-center ">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                    {todos.map((val, index) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>
                                    {val.status ? 'Complete' : 'Incomplete'}
                                </td>
                                <td>{val.description}</td>
                                <td>{val.createdAt}</td>
                                <td>{val.updatedAt}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};
export default TodosSequelize;
