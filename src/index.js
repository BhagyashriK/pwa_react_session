import React from 'react';
import ReactDOM from  'react-dom';
import Header from './components/header';
import ArticleList from "./components/article-list";


const App = (props) => {
    return [
        <Header key={1} />,
        <ArticleList key={2} />
    ];
}

ReactDOM.render(
  <App />,
  document.getElementById('root')  
);