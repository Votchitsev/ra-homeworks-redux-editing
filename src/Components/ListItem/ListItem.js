import './ListItem.css';

function ListItem({ data }) {
  return (
    <li>
      <div className="name">{ data.text }</div>
      <div className="sum">{ data.number }</div>
      <button className="update">Update</button>
      <button className="delete">Delete</button>
    </li>
  )
}

export default ListItem;
