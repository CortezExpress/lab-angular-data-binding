import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

 
  constructor() { }
  foods: Object[];
  boolean: boolean;
  newFood: Object = {};
  newList: Array<Object> = [];

  buttonClickMethod(){
    if(this.boolean == true) {
      this.boolean = false;
    }else{
      this.boolean = true
    }
  }

 addFood(){
   this.foods.push(this.newFood);
   this.newFood = {};
 }

 addToFoodList(food){
   console.log("adding to list");
   console.log(this.newList);
   this.newList.push(food);

 }


  ngOnInit() {
    this.foods = foods;
    this.boolean = true
  }

}
