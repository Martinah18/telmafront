import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  
  @Input() histoAfficher : any;
  @Input() client : any;
  
  constructor() { }

  ngOnInit(): void {
  }

  public estSmsEntrant(idClient : any){
    if(this.client.numero.localeCompare(idClient) !=0) 
      return true;
  }

  public estSmsSortant(idClient:any){
    if(this.client.numero.localeCompare(idClient) ==0)  
      return true;
  }

}
