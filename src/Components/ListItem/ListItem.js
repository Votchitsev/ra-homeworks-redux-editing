import './ListItem.css';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/listReducer';

function ListItem({ data }) {

  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(
      deleteItem({
        id: data.id,
      })
    );
  }

  return (
    <li>
      <div className="name">{ data.text }</div>
      <div className="sum">{ data.number }</div>
      <button className="update">Update</button>
      <button className="delete" onClick={ onDeleteHandler }>Delete</button>
    </li>
  )
}

export default ListItem;
