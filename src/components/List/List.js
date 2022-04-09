
import Item from './../Item/Item';

const List = (props) => {
    return (
        <ul className='my-4'>
            {props.todoList.map((item) => (
                <Item key={item.id} item={item} deletedItem={props.deletedItem} completed={props.completed} />
            )
            )}

        </ul>
    );
}
export default List