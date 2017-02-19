import React from 'react';
import classnames from 'classnames';

const TodoItem = ({
    onChange,
    todo
}) => {
    return (
        <li className={classnames({
            completed: todo.completed
        })}>
            <div className="view">
                <input className="toggle"
                       checked={todo.completed}
                       onChange={() => onChange(todo)}
                       type="checkbox" />
                <label>
                    {todo.description}
                </label>
                <button className="destroy" />
            </div>
        </li>
    );
};

export default TodoItem;