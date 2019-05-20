import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../User/articole/article.models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  listArticles() {
    return this.http.get<Article[]>(this.baseUrl + 'api/Articles/GetArticles');
  }

  loadArticle(articleID: string) {
    return this.http.get<Article>(this.baseUrl + `api/Articles/GetArticle?articleID=${articleID}`);
  }

  putArticle(article: Article) {
    return this.http.post<any>(this.baseUrl + `api/Articles/PutArticle`, article);
  }

  postArticle(article: Article) {
    return this.http.post<any>(this.baseUrl + `api/Articles/PostArticle`, article);
  }

  deleteArticle(articleID: string) {
    return this.http.delete<any>(this.baseUrl + `api/Articles/DeleteArticle?articleID=${articleID}`);
  }
}
