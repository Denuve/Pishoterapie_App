import { Component, OnInit } from '@angular/core';
import { Article } from './article.models';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-articole',
  templateUrl: './articole.component.html',
  styleUrls: ['./articole.component.css']
})
export class ArticoleComponent implements OnInit {

  articles;

  constructor(articleService: ArticleService) {
    articleService.listArticles().subscribe(res => {
      this.articles = res;
    });
  }

  ngOnInit() {
  }

}
