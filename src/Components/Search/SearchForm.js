import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from '../../redux/reducer';

function SearchForm() {
  const input = useRef();
  const dispatch = useDispatch();

  const onChangeHandler = () => {
    dispatch(
      setSearchValue(input.current.value)
    );
  }

  return (
    <form className="search-form">
      <input 
        className="search-form-input" 
        type="text"
        placeholder="...search" 
        ref={input} 
        onChange={ onChangeHandler }>
      </input>
    </form>
  )
}

export default SearchForm;
