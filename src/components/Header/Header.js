import React from 'react';
import TodoTextInput from '../TodoTextInput';

const Header = ({
    addTodo
}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoTextInput  newTodo
                            onSave={addTodo}
                            placeholder="What needs to be done?"
            />
        </header>
    );
};

Header.propTypes = {
    addTodo: React.PropTypes.func.isRequired,
};

export default Header;