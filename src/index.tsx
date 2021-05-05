import * as React from "react"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, Store } from "redux"
import reducer from "./store/reducer"
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk"
import { ArticleState, ArticleAction, ArticleDispatchType } from "./components/articles/articleTypes";

const store: Store<ArticleState, ArticleAction> & {dispatch: ArticleDispatchType} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();