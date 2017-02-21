import React from 'react';
import { inject, observer } from 'mobx-react';
import classnames from 'classnames';

import TodoTextInput from '../TodoTextInput';

const TodoItem = inject(
    'viewStore'
)(observer(({
    viewStore,
    onChange,
    onDelete,
    todo
}) => {
    const handleSave = (todo, text) => {
        if (text.length === 0) {
            onDelete(todo);
        } else {
            todo.description = text;
        }
        viewStore.setEditingTodo(null);
    };

    const handleDoubleClick = () => {
        viewStore.setEditingTodo(todo);
    };

    let element;
    const editing = viewStore.editingTodo === todo;

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
                        onClick={() => onDelete(todo)}/>
            </div>
        );
    }

    return (
        <li className={classnames({
            completed: todo.completed,
            editing: viewStore.editingTodo === todo
        })}>
            {element}
        </li>
    );
}));

export default TodoItem;