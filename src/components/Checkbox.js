import React from 'react';

const Checkbox = (props) => {

  const onCheckboxChange = (e) => {
    const list = e.target.value;
    if (e.target.checked) {
      props.onAddLists(list)
    } else if (!e.target.checked) {
      props.onRemoveLists(list)
    }
  }

  return (
    <div>
      <input 
        type="checkbox"
        id={props.precept}
        checked={props.lists.find((list) => list === props.precept)}
        value={props.precept}
        onChange={onCheckboxChange}
      />
      <label htmlFor={props.precept}>
        {props.precept}{props.lists.indexOf(props.precept) > -1 && (
          props.lists.indexOf(props.precept) + 1
        )}
      </label>
    </div>
  )
}

export default Checkbox;