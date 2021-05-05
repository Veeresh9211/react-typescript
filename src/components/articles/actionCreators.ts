import * as actionTypes from "../../store/actionTypes"
import {IArticle, ArticleAction, ArticleDispatchType} from './articleTypes';


export const addArticle =(article: IArticle)=>{
    const action: ArticleAction = {
            type: actionTypes.ADD_ARTICLE,
            article,
    }
    return (dispatch: ArticleDispatchType)=>{
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}


export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return (dispatch: ArticleDispatchType)=>{
    setTimeout(() => {
        dispatch(action)
    }, 500)
}
}