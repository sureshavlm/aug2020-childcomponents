import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-components';

  products: any = [
  	{ name: 'Lenova Laptop', price: 60000},
  	{ name: 'Dell Laptop', price: 65000},
  	{ name: 'Macbook Pro', price: 120000},
  	{ name: 'Sony Laptop', price: 90000}
  	];
}
