import { useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem';

function List() {

  const items = useSelector(state => state.store.list);
  const searchValue = useSelector(state => state.store.searchValue);

  return (
    <ul>
      { searchValue && searchValue.length > 0 ? 
        items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
          .map(item => <ListItem data={ item } key={ item.id } />) :
        items.map(item => <ListItem data={ item } key={ item.id } />) }
    </ul>
  )
}

export default List;
