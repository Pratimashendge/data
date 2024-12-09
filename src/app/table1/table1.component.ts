import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component  {

 skillArr=[{
  Dessert:"Yogurt",
  Calories:159,
  Fat:6,
  Carbs:24,
  Protein:4

 },
 {
  Dessert:"Sandwich",
  Calories:259,
  Fat:7,
  Carbs:24,
  Protein:4

 },
 {
  Dessert:"Eclairs",
  Calories:269,
  Fat:9,
  Carbs:34,
  Protein:6

 },
 {
  Dessert:"Cupcakes",
  Calories:309,
  Fat:9,
  Carbs:25,
  Protein:8

 },
 {
  Dessert:"Gingerbread",
  Calories:359,
  Fat:9,
  Carbs:28,
  Protein:9

 }
]

}

