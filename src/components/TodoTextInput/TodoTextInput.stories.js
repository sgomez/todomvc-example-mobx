import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import { TodoTextInput } from './TodoTextInput';
import TodoModel from '../../models/TodoModel/TodoModel';

import 'todomvc-app-css/index.css';

const todo = new TodoModel('Previous content');

const mockupOnSave = (text) => {
    const submitAction = action('saved');
    submitAction(text);
};

storiesOf('TodoTextInput', module)
    .add('New todo with placeholder', () => (
        <TodoTextInput
            newTodo
            onSave={mockupOnSave}
            placeholder="What needs to be done?"/>
    ))
    .add('New todo without placeholder', () => (
        <TodoTextInput
            newTodo
            onSave={mockupOnSave} />
    ))
    .add('Edit a previous todo', () => (
        <TodoTextInput
            editing={true}
            editingTodo={todo}
            onSave={mockupOnSave} />
    ))
;

