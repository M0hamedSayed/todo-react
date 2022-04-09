import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Add = (props) => {
    const [inputTodo, setInputTodo] = React.useState('');
    const handleChange = (e) => {
        setInputTodo(e.target.value)
    }
    const handleAdd = () => {
        if (inputTodo !== '') {
            props.addTodo(inputTodo)
        }
        setInputTodo('')
    }
    return (
        <div className="mb-4">
            <h1 className="font-extrabold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Todo List</h1>
            <div className="input_text relative">
                <input value={inputTodo} onChange={handleChange} className=" h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8 text-gray-600 md:text-xl font-semibold" type="text" placeholder="Write a new todo" />
                <button onClick={handleAdd} className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]">
                    Add task
                </button>

                <FontAwesomeIcon icon={faPencil} className="absolute top-[31px] text-gray-400 text-xl left-2 " />
            </div>
        </div>
    );
}
export default Add;