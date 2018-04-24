import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { firebaseConfig } from '../../environments/firebase.config';

// define routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // Add routes to the app
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
