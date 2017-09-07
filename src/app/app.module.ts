import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { Todos } from './mock-todo';
import { EditComponent } from './edit.component';
import { AddComponent } from './add.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent, ListComponent,EditComponent,AddComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
      {path:'',redirectTo:'todo',pathMatch:'full'},
      {path:'list', component: ListComponent },
      {path:'edit/:id', component: EditComponent },
      {path:'add', component: AddComponent }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
