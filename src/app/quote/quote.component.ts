import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[]= [
    new Quote(1, 'I drink and I know things', 'Tyrion Lanister', '', new Date(2019,6,17)),
  new Quote(2, 'When you play the game of thrones, you win, or you die.', 'Cersei Lanister', '', new Date(2019,6,17)),
  new Quote(3, 'You know nothing Jon Snow', 'Ygritte','', new Date(2019,6,17)),
  new Quote(4, 'Winter is coming', 'Everyone','', new Date(2019,6,18)),

  ];


  constructor() { }

  ngOnInit() {
  }

}
