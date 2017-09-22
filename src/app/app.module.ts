import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';
import { AddComponent } from './add.component';
import { TodoService } from './todo.service';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent, ListComponent,EditComponent,AddComponent,StatsComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule,RouterModule.forRoot([
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list', component: ListComponent },
      {path:'edit/:id', component: EditComponent },
      {path:'add', component: AddComponent }
    ])
  ],
  providers: [TodoService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
