import { Component, OnInit } from '@angular/core';
import { RandomQuoteService } from './random-quote.service';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  quote$ = this.quoteService.quote$;
tweetUrl = 'https://twitter.com/intent/tweet?text=';

  // speechSynthesis = window.speechSynthesis;
  // voices = speechSynthesis.getVoices();

  constructor(private quoteService: RandomQuoteService, private speechService: SpeechService) { }

  ngOnInit() {
    this.quoteService.getQuotes();    
  }

  getRandomQuote() {
    this.quoteService.getRandomQuote();
    this.speechService.cancel()
  }

  speak(quote) {
    this.speechService.speak(`${quote.quote} by ${quote.author}`);
  }
}