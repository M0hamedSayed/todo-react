
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const Item = (props) => {
    const completedTodo = (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('bg-lime-600');
        e.currentTarget.nextElementSibling.classList.toggle('decoration-transparent')
        props.completed(!props.item.completed, props.item.id)
    }

    const deletedItem = () => {
        props.deletedItem(props.item.id)
    }



    const renderCompleted = () => {
        if (props.item.completed) {
            return (
                <>
                    <span onClick={completedTodo} className=" w-7 h-7 bg-lime-600  rounded-full  transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" >
                        <FontAwesomeIcon icon={faCheckCircle} className="text-white w-7 h-7" />
                    </span>
                    <strike className="strike_none   text-sm ml-4 text-[#5b7a9d] font-semibold">{props.item.name}</strike>
                </>
            );
        }
        else {
            return (
                <>
                    <span onClick={completedTodo} className=" w-7 h-7 bg-white  rounded-full  transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" >
                        <FontAwesomeIcon icon={faCheckCircle} className="text-white w-7 h-7" />
                    </span>
                    <strike className="strike_none decoration-transparent text-sm ml-4 text-[#5b7a9d] font-semibold">{props.item.name}</strike>
                </>
            );
        }
    }
    return (
        <li className=" mt-4" >
            <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                    {renderCompleted()}
                    <span onClick={deletedItem} className=" w-7 h-7 bg-white bg-red-600 rounded-full  transition-all cursor-pointer hover:bg-red-700 flex justify-center items-center ml-auto" >
                        <FontAwesomeIcon icon={faTrashCan} className="text-white " />
                    </span>
                </div>
                <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">{props.item.createdAt}</span>
            </div>
        </li>
    );
}
export default Item;