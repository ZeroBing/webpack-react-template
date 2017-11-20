import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.less';
import { AppContainer } from 'react-hot-loader';
import App from './component/App';


/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
  module.hot.accept('./component/App', () => {
    const App = require('./component/App').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  ReactDom.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  )
}