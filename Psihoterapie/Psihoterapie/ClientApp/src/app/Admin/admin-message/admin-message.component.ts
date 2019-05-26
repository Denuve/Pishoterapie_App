import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {

  messages;

  constructor(messageService: MessageService) {
    messageService.listMessages().subscribe(res => {
      this.messages = res;
    });
  }

  ngOnInit() {
  }

}
