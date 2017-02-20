import React from 'react';
import { Provider } from 'mobx-react';

import { ViewStore } from '../../src/stores/viewStore/viewStore';

const viewStore = new ViewStore();
const ViewStoreDecorator = (story) => (
    <Provider viewStore={viewStore}>
        {story()}
    </Provider>
);

export default ViewStoreDecorator;
