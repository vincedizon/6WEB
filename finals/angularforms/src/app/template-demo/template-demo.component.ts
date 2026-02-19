import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent {
  // Initialize the user model
  user = {
    username: '',
    email: '',
    phone: '',
    department: '',
    gender: '',
    joinDate: '',
    status: '',
    comments: ''
  };

  showNotification: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // 1. Process data
      console.log('Application Submitted:', this.user);

      // 2. Trigger Notification
      this.showNotification = true;

      // 3. Clear form and validation states
      form.resetForm();

      // 4. Auto-hide notification after 3 seconds
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }
  }
}
