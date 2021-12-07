import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './service/firestore/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'constructora';
  constructor(private firestoreService: FirestoreService){
    
  }
  ngOnInit(): void {
    
  }
}

