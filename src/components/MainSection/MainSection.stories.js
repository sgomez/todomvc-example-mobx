import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import { MainSection } from './MainSection';
import { SHOW_ALL } from '../../constants/filters';
import TodoModel from "../../models/TodoModel/TodoModel";

import 'todomvc-app-css/index.css';

const store = {
    todos: {
        remove: (todo) => {
            const handleDeleteTodo = action('deleted');
            handleDeleteTodo();
        }
    }
};

const todo = new TodoModel('Buy some milk', store);

const mockupHandleEdit = (todo) => {
    const handleEditTodo = action('edit');
    handleEditTodo(todo);
};

const mockupHandleToggleCompleted = (todo) => {
    const handleToggleCompleted = action('toggled');
    handleToggleCompleted(todo);
};


storiesOf('MainSection', module)
    .add('No items', () => (
        <MainSection
            handleEditing={mockupHandleEdit}
            handleToggleAll={mockupHandleToggleCompleted}
            editingTodo={mockupHandleEdit()}
            filter={SHOW_ALL}
            todos={[]}
        />
    ))
    .add('One item', () => (
        <MainSection
            handleEditing={mockupHandleEdit}
            handleToggleAll={mockupHandleToggleCompleted}
            editingTodo={mockupHandleEdit()}
            filter={SHOW_ALL}
            todos={[todo]}
        />
    ))
;
