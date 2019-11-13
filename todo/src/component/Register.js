import React, {useReducer, useRef} from 'react';
// import reducer from 'reducer'

// function Resister(){
// 	const [state, dispatch] = useReducer(reducer, {toDo: []});
// 	return(
// 	<div>
// 		<input ></input>
// 		<button onChange={() => dispatch({type: 'resister'})}></button>
// 	</div>
// 	);

// }

function Resister() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case 'remove':
        // 削除対象以外の項目を保持する
        return state.filter((_, index) => index !== action.index);
      default:
        return state;
    }
  }, []);

	function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => dispatch({ type: 'remove', index })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}


export default Resister;

