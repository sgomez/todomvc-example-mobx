import React from 'react';
import classnames from 'classnames';

const TodoTextInput = ({
    editing,
    newTodo,
    onSave,
    placeholder,
    todo,
}) => {
    const handleBlur = (event) => {
        const description = event.target.value.trim();

        if (editing) {
            onSave(description);
        }
    };

    const handleChange = (event) => {
        todo.description = event.target.value;
    };

    const handleKeyDown = (event) => {
        if (event.which === 13) {
            const description = event.target.value.trim();
            onSave(description);

            if (newTodo) {
                event.target.value = '';
            }
        }
    };

    return (
        <input
            className={
                classnames({
                    edit: editing,
                    'new-todo': newTodo
                })
            }
            type="text"
            autoFocus
            placeholder={placeholder}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            defaultValue={todo.description}
        />
    );
};

TodoTextInput.propTypes = {
    editing: React.PropTypes.bool,
    newTodo: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    todo: React.PropTypes.object,
};

export default TodoTextInput;
