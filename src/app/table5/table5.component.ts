import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.scss']
})
export class Table5Component {

  skillArr=[{
    Name:"Hydrogen",
    Weight:1.0079,
    Symbol:"H"
  },
  {
    Name:"Helium",
    Weight:4.0079,
    Symbol:"He"
  },
  {
    Name:"Lithium",
    Weight:6.941,
    Symbol:"Li"
  },
  {
    Name:"Boron",
    Weight:10.079,
    Symbol:"B"
  },
  {
    Name:"Carbon",
    Weight:12.0079,
    Symbol:"C"
  },
  {
    Name:"Nitrogen",
    Weight:14.0079,
    Symbol:"N"
  },
  {
    Name:"Oxygen",
    Weight:15.879,
    Symbol:"H"
  }

]

}
