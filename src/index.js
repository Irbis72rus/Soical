import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App
          // Закоментили 3 строки с передаваемыми значениями, когда добавили StoreContext
            // state={state}
            // dispatch={store.dispatch.bind(store)}
            // store={store}
        // state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
          />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );

// Убрали в 47й лекции (10:50)
// rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Пока убрали, мб нужно
// reportWebVitals();

// store.subscribe(rerenderEntireTree);

// serviceWorker.unregister();


// Убрали в 47й лекции (10:50)
/*store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});*/