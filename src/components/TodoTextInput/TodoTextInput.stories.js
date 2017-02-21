import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import TodoTextInput from './TodoTextInput';
import TodoModel from '../../models/TodoModel/TodoModel';

import 'todomvc-app-css/index.css';

const emptyTodo = new TodoModel();
const todo = new TodoModel('Previous content');

const mockupOnSave = (text) => {
    const submitAction = action('saved');
    emptyTodo.description = '';
    todo.description = 'Previous content';
    submitAction(text);
};

storiesOf('TodoTextInput', module)
    .add('New todo with placeholder', () => (
        <TodoTextInput
            newTodo
            onSave={mockupOnSave}
            placeholder="What needs to be done?"
            todo={emptyTodo} />
    ))
    .add('New todo without placeholder', () => (
        <TodoTextInput
            newTodo
            onSave={mockupOnSave}
            todo={emptyTodo} />
    ))
    .add('Edit a previous todo', () => (
        <TodoTextInput
            editing
            onSave={mockupOnSave}
            todo={todo} />
    ))
;

