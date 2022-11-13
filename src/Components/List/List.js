import { useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem';

function List() {

  const items = useSelector(state => state.store.list);

  return (
    <ul>
      { items.map(item => <ListItem data={ item } key={ item.id } />) }
    </ul>
  )
}

export default List;
