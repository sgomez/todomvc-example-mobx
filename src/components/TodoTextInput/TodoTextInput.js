import React from 'react';
import classnames from 'classnames';

const TodoTextInput = ({
    newTodo,
    onSave,
    placeholder,
    text
}) => {
    const onKeyDown = (event) => {
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
                    'new-todo': newTodo
                })
            }
            type="text"
            autoFocus="true"
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            value={text}
        />
    );
};

TodoTextInput.propTypes = {
    newTodo: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    text: React.PropTypes.string,
};

export default TodoTextInput;