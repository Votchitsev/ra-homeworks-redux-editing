import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './Form.css'
import { addItem } from '../../redux/listReducer';

function Form() {
  const text = useRef();
  const number = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: nanoid(),
        text: text.current.value,
        number: number.current.value,
      })
    );

    text.current.value = '';
    number.current.value = '';
  }

  return (
    <form onSubmit={ onSubmitHandler }>
      <input type="text" ref={ text }></input>
      <input type="number" ref={ number }></input>
      <input type="submit"></input>
    </form>
  )
}

export default Form;
