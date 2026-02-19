import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent implements OnInit {
  registrationForm!: FormGroup;
  submittedData: any = null;
  showNotification = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required], // Added
      password: ['', [Validators.required, Validators.minLength(8)]], // Restored
      department: ['', Validators.required], // Added
      gender: ['', Validators.required],
      joinDate: ['', Validators.required], // Added
      status: ['', Validators.required],
      comments: ['']
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submittedData = { ...this.registrationForm.value };
      this.showNotification = true;

      // We log to confirm submission is working
      console.log('Form Submitted!', this.submittedData);

      // Reset form but keep the preview data
      this.registrationForm.reset();

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }
  }
}
