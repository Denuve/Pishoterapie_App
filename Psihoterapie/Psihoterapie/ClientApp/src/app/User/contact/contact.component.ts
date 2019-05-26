import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../Admin/message.service';
import { Message } from '../../Admin/admin-message/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message = new Message();
  ok: boolean = false;

  constructor(private messageService: MessageService,
              private router: Router
  ) { }

  submit() {
    this.messageService.postMessage(this.message).subscribe(res => {
      this.router.navigate(['/contact']);
    });
    this.ok = true;
  }

  ngOnInit() {
  }

}
