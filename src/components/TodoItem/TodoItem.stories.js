import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import TodoItem from './TodoItem';
import TodoModel from "../../models/TodoModel/TodoModel";

import 'todomvc-app-css/index.css';

const todo = new TodoModel('Buy some milk');
const completedTodo = new TodoModel('Buy some milk');
completedTodo.toggle();
const editableTodo = new TodoModel('Buy some milk');

const mockupHandleDelete = (todo) => {
    const handleDeleteTodo = action('deleted');
    handleDeleteTodo(todo);
};

const mockupHandleEdit = (todo) => {
    const handleEditTodo = action('edit');
    handleEditTodo(todo);
};

const mockupHandleToggleCompleted = (todo) => {
    const handleToggleCompleted = action('toggled');
    handleToggleCompleted(todo);
};

storiesOf('TodoItem', module)
    .addDecorator((story) => (
        <ul className="todo-list">
            {story()}
        </ul>
    ))
    .add('View todo', () => (
        <TodoItem
            onChange={mockupHandleToggleCompleted}
            onDelete={mockupHandleDelete}
            onEditing={(todo) => mockupHandleEdit(todo)}
            todo={todo} />
    ))
    .add('View completed todo', () => (
        <TodoItem
            onChange={mockupHandleToggleCompleted}
            onDelete={mockupHandleDelete}
            onEditing={(todo) => mockupHandleEdit(todo)}
            todo={completedTodo} />
    ))
    .add('View editable todo', () => (
        <TodoItem
            editing
            onChange={mockupHandleToggleCompleted}
            onDelete={mockupHandleDelete}
            onEditing={(todo) => mockupHandleEdit(todo)}
            todo={editableTodo} />
    ))
;