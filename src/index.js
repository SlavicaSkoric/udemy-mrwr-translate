import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//fix for CRA not reloading in browser on save:
if (module.hot) {
  module.hot.accept();
}
//

ReactDOM.render(<App />, document.querySelector('#root'));
