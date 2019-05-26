import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Admin/admin-message/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  listMessages() {
    return this.http.get<Message[]>(this.baseUrl + 'api/Messages/GetMessages');
  }

  loadMessage(messageId: string) {
    return this.http.get<Message>(this.baseUrl + `api/Messages/GetMessage?messageId=${messageId}`);
  }

  putMessage(message: Message) {
    return this.http.post<any>(this.baseUrl + `api/Messages/PutMessage`, message);
  }

  postMessage(message: Message) {
    return this.http.post<any>(this.baseUrl + `api/Messages/PostMessage`, message);
  }

  deleteMessage(messageID: string) {
    return this.http.delete<any>(this.baseUrl + `api/Messages/DeleteMessage?messageID=${messageID}`);
  }
}
