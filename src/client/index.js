import React from 'react';
import ReactDom from 'react-dom';

import Test from './components/Test/Test';

function render(RootComponent) {
    ReactDom.render(<RootComponent />,
      document.getElementById('app')
    );
}

export default render(Test);