import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { List4Component } from './list4/list4.component';
import { List5Component } from './list5/list5.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
import { Table5Component } from './table5/table5.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
    List3Component,
    List4Component,
    List5Component,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
