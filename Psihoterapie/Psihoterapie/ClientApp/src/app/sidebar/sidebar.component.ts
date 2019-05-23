import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../user/articole/article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  articles;

  constructor(articleService: ArticleService) {
    articleService.listArticles().subscribe(res => {
      this.articles = res;
    });
  }

  ngOnInit() {
  }

}
