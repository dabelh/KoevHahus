import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { StudentComponent } from './student/student.component';

import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    StudentComponent,
    ACompComponent,
    BCompComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: ':name', component: ACompComponent },
        { path: 'b/:name', component: BCompComponent },
        { path: 'b', component: BCompComponent },
        { path: '**', component: NotFoundComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
