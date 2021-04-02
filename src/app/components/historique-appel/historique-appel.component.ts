import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
@Component({
  selector: 'app-historique-appel',
  templateUrl: './historique-appel.component.html',
  styleUrls: ['./historique-appel.component.css']
})
export class HistoriqueAppelComponent implements OnInit {

  @Input() histoAfficher : any;
  @Input() client : any;
  
 
  constructor() {}

  ngOnInit(): void {
    
  }


  public estAppelEntrant(idClient:any){
    if(this.client.numero.localeCompare(idClient) !=0) 
      return true;
  }

  public estAppelSortant(idClient:number){
    if(this.client.numero.localeCompare(idClient) ==0)  
      return true;
  }


  

}


