import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-forms.html',
  styleUrl: './custom-forms.css'
})
export class CustomFormsComponent implements OnInit {
  customForm!: FormGroup;
  submittedData: any = null; 
  showNotification = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  this.customForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required], 
    password: ['', [Validators.required, Validators.minLength(8)]], 
    gender: ['', Validators.required],
    joinDate: ['', Validators.required], 
    status: ['', Validators.required],
    comments: ['']
  });
}

  get f() { return this.customForm.controls; }

  onSubmit() {
    if (this.customForm.valid) {
      this.submittedData = { ...this.customForm.value };
      this.showNotification = true;
      
      
      this.customForm.reset(); 
      
      setTimeout(() => this.showNotification = false, 3000);
    }
  }
}