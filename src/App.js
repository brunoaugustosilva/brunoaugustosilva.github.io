import React, { useState } from 'react';
//import logo from './logo.svg';
import Menu from './components/Menu';
import './sass/App.scss';
import Content from './components/Content';

function App() {

  const [articleId, setArticleId] = useState(1);

  return (
    <div className="App">
      <Menu class="App-header" setArticleId={(articleId) => setArticleId(articleId)} articleId={articleId}/>
      <Content articleId={articleId} setArticleId={(articleId) => setArticleId(articleId)}/>
    </div>
  );
}

export default App;
