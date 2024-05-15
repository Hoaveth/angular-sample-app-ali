import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first-service.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss'],
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  messages: Array<any> = [];
  isSubmitted: boolean = false;

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  resetForm(): void {
    this.name = '';
    this.message = '';
    this.email = '';
  }

  deleteMessage(index: number): void {
    this.service.deleteMessage(index);
  }
}
