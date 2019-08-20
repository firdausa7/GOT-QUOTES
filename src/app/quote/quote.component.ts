import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I drink and I know things', 'Tyrion Lanister', '', new Date(2019,6,17)),
  new Quote(2, 'When you play the game of thrones, you win, or you die.', 'Cersei Lanister', '', new Date(2019,6,17)),
  new Quote(3, 'You know nothing Jon Snow', 'Ygritte','', new Date(2019,6,17)),
  new Quote(4, 'Winter is coming', 'Everyone','', new Date(2019,6,18)),
  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}
