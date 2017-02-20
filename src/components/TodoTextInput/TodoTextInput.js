import React from 'react';
import classnames from 'classnames';
import { observer, inject } from 'mobx-react';

const TodoTextInput = inject(
    'viewStore'
)(observer(({
    viewStore,
    editing,
    newTodo,
    onSave,
    placeholder,
}) => {
    const handleChange = (event) => {
        if (editing) {
            viewStore.editingTodo.description = event.target.value;
        }
    };

    const handleKeyDown = (event) => {
        if (event.which === 13) {
            const description = event.target.value.trim();

            if (description.length > 0) {
                onSave(description);

                if (newTodo) {
                    event.target.value = '';
                }
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
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={ editing ? viewStore.editingTodo.description : undefined }
        />
    );
}));

TodoTextInput.propTypes = {
    description: React.PropTypes.string,
    editing: React.PropTypes.bool,
    newTodo: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
};

export default TodoTextInput;