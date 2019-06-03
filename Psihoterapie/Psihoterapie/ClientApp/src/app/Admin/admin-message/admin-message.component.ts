import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpRequestInterceptor } from '../../login.service';
import { Token } from '../../shared/security.models';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {

  messages;
  token: Token;

  constructor(messageService: MessageService,
              private interceptor: HttpRequestInterceptor) {
    messageService.listMessages().subscribe(res => {
      this.messages = res;
    });

    this.token = interceptor.getToken();
  }

  ngOnInit() {
  }

}
