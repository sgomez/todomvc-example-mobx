import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import { Header } from './Header';
import ViewStoreDecorator from '../../../stories/decorators/ViewStoreDecorator';

import 'todomvc-app-css/index.css';

const mockupHandeSaveTodo = (text) => {
    const handleSaveTodo = action('saved');
    handleSaveTodo(text);
};


storiesOf('Header', module)
    .addDecorator(ViewStoreDecorator)
    .add('Show header', () => (
        <Header handleSaveTodo={mockupHandeSaveTodo} />
    ))
;