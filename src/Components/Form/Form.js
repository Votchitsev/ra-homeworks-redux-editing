import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './Form.css'
import { addItem, setUpdateItemForm, updateItem } from '../../redux/listReducer';

function Form() {
  const text = useRef();
  const number = useRef();

  const defaultFormValues = useSelector(state => state.listMaker.defaultFormValues);
  const updateItemForm = useSelector(state => state.listMaker.updateItemForm);
  const selectedItemId = useSelector(state => state.listMaker.selectedItemId);
  
  useEffect(() => {
    text.current.value = defaultFormValues.text;
    number.current.value = defaultFormValues.number
  }, [defaultFormValues])

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!updateItemForm) {
      dispatch(
        addItem({
          id: nanoid(),
          text: text.current.value,
          number: number.current.value,
        })
      );
  
      text.current.value = '';
      number.current.value = '';

      return;
    }
    
    dispatch(
      updateItem({
        id: selectedItemId,
        text: text.current.value,
        number: number.current.value,
      })
    )

    dispatch(
      setUpdateItemForm(false)
    );
  }

  const onCancelHandler = () => {
    dispatch(
      setUpdateItemForm(false)
    );

    text.current.value = '';
    number.current.value = '';
  }

  return (
    <form onSubmit={ onSubmitHandler }>
      <input type="text" ref={ text }></input>
      <input type="number" ref={ number }></input>
      <input type="submit" value='save'></input>
      { updateItemForm ? <button className='cancel' onClick={ onCancelHandler }>{'cancel'}</button> : null }
    </form>
  )
}

export default Form;
