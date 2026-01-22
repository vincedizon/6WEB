import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { ProductService } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public products: any[] = [];
  public employees: any[] = [];

  constructor(
    private _employeeService: Employee,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
