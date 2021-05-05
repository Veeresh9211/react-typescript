import * as React from "react"
import {IArticle, ArticleState, ArticleDispatchType} from './components/articles/articleTypes';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Article } from "./components/articles/articles";
import { AddArticle } from "./components/articles/addArticle";
import { addArticle, removeArticle } from "./components/articles/actionCreators";
import { Dispatch } from "redux"

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = (article: IArticle) =>{
    dispatch(addArticle(article))
  }

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}

export default App