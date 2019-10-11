import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() product:any;
@Output() item = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("producto",this.product);
  }

  sendData(){
    this.item.emit(this.product);
  }

}
