//creating All the stateType, actionType and dispatchType for a GIVEN ARTICLE.
// All 3 stateType, actionType and dispatchType are required for redux operations.

export interface IArticle{
    id: number
    title: string
    body: string
}

export type ArticleState= {
    articles: IArticle[],
    filterData: any
}

export type ArticleAction = {
    type: string,
    article: IArticle
}

export type ArticleDispatchType = (args: ArticleAction) => ArticleAction