import { useDispatch } from 'react-redux';

import { deleteItem, setDefaultFormValues, setSelectedItemId, setUpdateItemForm } from '../../redux/reducer';
import './ListItem.css';

function ListItem({ data }) {

  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(
      deleteItem({
        id: data.id,
      })
    );
  }

  const onUpdateHandler = () => {
    dispatch(
      setDefaultFormValues({
        text: data.text,
        number: data.number,
      })
    );

    dispatch(
      setUpdateItemForm(true)
    );

    dispatch(
      setSelectedItemId(data.id)
    );
  }

  return (
    <li>
      <div className="name">{ data.text }</div>
      <div className="sum">{ data.number }</div>
      <button className="update" onClick={ onUpdateHandler }>Update</button>
      <button className="delete" onClick={ onDeleteHandler }>Delete</button>
    </li>
  )
}

export default ListItem;
