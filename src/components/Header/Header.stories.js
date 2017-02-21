import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import { Header } from './Header';
import StoreDecorator from '../../../stories/decorators/StoreDecorator';

import 'todomvc-app-css/index.css';
import TodoModel from "../../models/TodoModel/TodoModel";

const todo = new TodoModel();

const mockupHandeSaveTodo = (text) => {
    const handleSaveTodo = action('saved');
    handleSaveTodo(text);
};

storiesOf('Header', module)
    .addDecorator(StoreDecorator)
    .add('Show header', () => (
        <Header addTodo={mockupHandeSaveTodo} todo={todo} />
    ))
;