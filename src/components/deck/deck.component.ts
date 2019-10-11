import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() articles: any;
  @Input() item:any;

  paginatorSize=3;
  numberOfProductsDisplayedInPage=12;
  constructor() { }

  ngOnInit() {
    console.log("articulos",this.articles)
  }

}
