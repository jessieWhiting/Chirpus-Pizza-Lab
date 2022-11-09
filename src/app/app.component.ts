import { Component } from '@angular/core';
import { MenuItem } from 'src/MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  items: MenuItem[] = [
  {item: "Mango Slice", category: "Slice", price: 3.50},
  {item: "Octa-Meat Slice", category: "Slice", price: 3.50},
  {item: "I'm a Vegan Slice", category: "Slice", price: 2.00},
  {item: "Everything Nice Slice", category: "Slice", price: 3.75},
  {item: "Grambdt Chirpus Slice", category: "Slice", price: 2.50},
  

  {item: "Mango Pizza", category: "Pizza", price: 16.00},
  {item: "Octa-Meat", category: "Pizza", price: 18.00},
  {item: "I'm a Vegan Pizza", category: "Pizza", price: 14.00},
  {item: "Everything Nice Pizza", category: "Pizza", price: 20.00},
  {item: "Grambdt Chirpus Pizza", category: "Pizza", price: 16.50},

  {item: "Marry Your Cousin Wings /Sweet", category: "Wings", price: 8.00},
  {item: "Slap Yo Baby Wings /HOT", category: "Wings", price: 6.00},
  {item: "Jamican me Jerk Wings /HOT", category: "Wings", price: 7.00},
  {item: "Mango Mammi/ Sweet", category: "Wings", price: 9.00},

  {item: "Baby Cakes", category: "Dessert", price: 3.00},
  {item: "Sweet Thang", category: "Dessert", price: 6.00},
  {item: "Caramel Meltdown", category: "Dessert", price: 4.00},
  {item: "Ice Ice Iceream", category: "Dessert", price: 2.00}
  ];

  getByCategory(){
    let input = (<HTMLInputElement>document.getElementById("category")).value;

    let filteredMenu : MenuItem[] = [];

    for(let i = 0; i < this.items.length; i++){
      let men : MenuItem = this.items[i];

      if(men.category.includes(input)){
        filteredMenu.push(men);
      }
    }
    this.items = filteredMenu;
  }
  Reset(){
    this.items = [
      {item: "Mango Slice", category: "Slice", price: 3.50},
      {item: "Octa-Meat Slice", category: "Slice", price: 3.50},
      {item: "I'm a Vegan Slice", category: "Slice", price: 2.00},
      {item: "Everything Nice Slice", category: "Slice", price: 3.75},
      {item: "Grambdt Chirpus Slice", category: "Slice", price: 2.50},
      
    
      {item: "Mango Pizza", category: "Pizza", price: 16.00},
      {item: "Octa-Meat", category: "Pizza", price: 18.00},
      {item: "I'm a Vegan Pizza", category: "Pizza", price: 14.00},
      {item: "Everything Nice Pizza", category: "Pizza", price: 20.00},
      {item: "Grambdt Chirpus Pizza", category: "Pizza", price: 16.50},
    
      {item: "Marry Your Cousin Wings /Sweet", category: "Wings", price: 8.00},
      {item: "Slap Yo Baby Wings /HOT", category: "Wings", price: 6.00},
      {item: "Jamican me Jerk Wings /HOT", category: "Wings", price: 7.00},
      {item: "Mango Mammi/ Sweet", category: "Wings", price: 9.00},
    
      {item: "Baby Cakes", category: "Dessert", price: 3.00},
      {item: "Sweet Thang", category: "Dessert", price: 6.00},
      {item: "Caramel Meltdown", category: "Dessert", price: 4.00},
      {item: "Ice Ice Iceream", category: "Dessert", price: 2.00}
      ];
  }
}
