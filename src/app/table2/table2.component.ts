import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component  {

 skillArr=[{
  Dessert:"Cookie",
  Calories:259,
  Fat:8,
  Carbs:24,
  Protein:10

 },
 {
  Dessert:"Barfi",
  Calories:259,
  Fat:7,
  Carbs:24,
  Protein:4

 },
 {
  Dessert:"Cheesecake",
  Calories:269,
  Fat:9,
  Carbs:34,
  Protein:6

 },
 {
  Dessert:"Ice cream",
  Calories:309,
  Fat:9,
  Carbs:25,
  Protein:8

 },
 {
  Dessert:"Fudge",
  Calories:359,
  Fat:9,
  Carbs:28,
  Protein:18

 }
]

}

