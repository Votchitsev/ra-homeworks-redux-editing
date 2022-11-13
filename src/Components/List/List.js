import './List.css';
import ListItem from '../ListItem/ListItem';
import { useSelector } from 'react-redux';

function List() {

  const items = useSelector(state => state.listMaker.list);

  return (
    <ul>
      { items.map(item => <ListItem data={ item } key={ item.id } />) }
    </ul>
  )
}

export default List;