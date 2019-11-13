import React, {useReducer, useRef} from 'react';
// import Button from './Button';
import Reducer from '../Reducer'

function Resister() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(Reducer, []); 

	function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
		});
    inputRef.current.value = '';
  }
  return (
    <>
      <form >
        <input ref={inputRef} />
				<button onClick={handleClick}>登録</button>
      </form>
      <ul>
        {items.map((item, index) => (
					<li key={item.id}>
						{item.name}
						<button onClick={() => dispatch({ type: 'remove', index })}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}


export default Resister;

