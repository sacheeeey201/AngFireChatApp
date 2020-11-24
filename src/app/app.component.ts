import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDSVNDgsokzZ9bl_FLJ2nTjaMAgIAUeio",
  authDomain: "baatein-286ac.firebaseapp.com",
  databaseURL: "https://baatein-286ac.firebaseio.com",
  projectId: "baatein-286ac",
  storageBucket: "baatein-286ac.appspot.com",
  messagingSenderId: "685280964032",
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-chat';

  constructor() {
    firebase.initializeApp(config);
  };
}
