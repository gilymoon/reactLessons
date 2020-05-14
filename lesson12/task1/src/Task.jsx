import React from "react";
import classNames from 'classnames';

const Task = ({ id, done, text, onChange, onDelete}) => {
  const listItemClasses = classNames('list-item', {'list-item_done' : done})
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        defaultChecked={done}
        className="list-item__checkbox"
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span> 
      <button onClick={() => onDelete(id)} className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
