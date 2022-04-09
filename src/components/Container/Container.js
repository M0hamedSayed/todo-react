import List from "../List/List";
import React, { useEffect } from 'react';
const { default: Add } = require("../Add/Add");


const Container = () => {
    const [todoList, setTodoList] = React.useState([]);


    useEffect(() => {
        console.log(todoList);
    }, [todoList])

    const addTodo = (inputTodo) => {
        setTodoList([
            ...todoList,
            {
                id: todoList.length + 1,
                name: inputTodo,
                completed: false,
                createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ])
    }

    const completed = (completed, id) => {
        let index = todoList.findIndex((todo) => todo.id === id);
        let list = [...todoList];
        list[index].completed = completed;
        setTodoList(list);
    }

    const deletedItem = (id) => {
        let index = todoList.findIndex((todo) => todo.id === id);
        let list = [...todoList];
        list.splice(index, 1);
        setTodoList(list)
    }
    return (
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-4xl">
            <Add addTodo={addTodo} />
            <hr className="w-48 mx-auto" />
            <List todoList={todoList} deletedItem={deletedItem} completed={completed} />
        </div>

    );
}

export default Container;