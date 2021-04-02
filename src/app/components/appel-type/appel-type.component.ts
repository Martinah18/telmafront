import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appel-type',
  templateUrl: './appel-type.component.html',
  styleUrls: ['./appel-type.component.css']
})
export class AppelTypeComponent implements OnInit {

  @Output()  clickFiltreAppel = new EventEmitter<any>();
  @Output()  clickEffacer = new EventEmitter<any>();
  @Input() types :any ;

  type : any;

  constructor() { }

  ngOnInit(): void {
  }

  trier(){
        this.clickFiltreAppel.emit(this.type.id);
  }
  effacer(){
    this.clickEffacer.emit(this.type.id);
  }

}