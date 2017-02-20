import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import { Header } from './Header';
import StoreDecorator from '../../../stories/decorators/StoreDecorator';

import 'todomvc-app-css/index.css';

const mockupHandeSaveTodo = (text) => {
    const handleSaveTodo = action('saved');
    handleSaveTodo(text);
};

storiesOf('Header', module)
    .addDecorator(StoreDecorator)
    .add('Show header', () => (
        <Header handleSaveTodo={mockupHandeSaveTodo} />
    ))
;