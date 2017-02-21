import React from 'react';
import classnames from 'classnames';

import TodoTextInput from '../TodoTextInput';

const TodoItem = ({
    editing,
    onChange,
    onDelete,
    onEditing,
    todo,
}) => {
    const handleSave = (todo, text) => {
        if (text.length === 0) {
            onDelete(todo);
        } else {
            todo.description = text;
        }
        onEditing(null);
    };

    const handleDoubleClick = () => {
        onEditing(todo);
    };

    let element;

    if (editing) {
        element = (
            <TodoTextInput editing
                           onSave={(text) => handleSave(todo, text)}
                           todo={todo} />
        );
    } else {
        element = (
            <div className="view">
                <input className="toggle"
                       checked={todo.completed}
                       onChange={(e) => onChange(todo)}
                       type="checkbox" />
                <label onDoubleClick={handleDoubleClick}>
                    {todo.description}
                </label>
                <button className="destroy"
                        onClick={(e) => onDelete(todo)}/>
            </div>
        );
    }

    return (
        <li className={classnames({
            completed: todo.completed,
            editing: editing
        })}>
            {element}
        </li>
    );
};

TodoItem.propTypes = {
    editing: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onEditing: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired,
};

export default TodoItem;