import { Component, OnInit } from '@angular/core';
import { Article } from '../articole/article.models';
import { ArticleService } from '../articole/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articol',
  templateUrl: './articol.component.html',
  styleUrls: ['./articol.component.css']
})
export class ArticolComponent implements OnInit {

  article: Article;
  data;
  articleId: string;
  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {


    this.articleId = this.route.snapshot.params['id'];
    this.articleService.listArticles().subscribe(res => {
      this.article = res.find(x => x.id == this.articleId);
      this.data = this.article.date.getDate;
    });
  }

  ngOnInit() {
  }

}
