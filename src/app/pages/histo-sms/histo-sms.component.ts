import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { TelmaService } from '../../services/telma/telma.service';

@Component({
  selector: 'app-histo-sms',
  templateUrl: './histo-sms.component.html',
  styleUrls: ['./histo-sms.component.css']
})
export class HistoSmsComponent implements OnInit {

  types = [{"id":0,"nom":"tout"},{"id": 1, "nom":"Entrant"},{"id": 2, "nom":"Sortant"}];
  historique : any;
  historiqueEntrant : any; 
  historiqueSortant : any;
  histoAfficher : any;
  client :any;
  message : string ;
  constructor(private client_service : ClientService,private telma_service : TelmaService, private router : Router) {}

  
  ngOnInit(): void {
    this. getClient();
  }

  setHistoriqueAfficher($event){
    if($event == 1){
      this.histoAfficher = this.historiqueEntrant;
    }else if($event == 2){
      this.histoAfficher = this.historiqueSortant;
    }else{
     this.histoAfficher = this.historique;
    }
  }

  reloadData(){
    location.reload();
  }

  effacerHistorique($event){
    const success = data =>{
      this.message = data.message;
      this.telma_service.redirect(data,401,"/", this.router);
      // this.reloadData();
    }

    const error = data =>{
      this.message = data.message;
      this.telma_service.redirect(data,401,"/", this.router);
    }
    this.client_service.effacerHistoriqueSms($event).subscribe(success,error);
  }

  getClient(){
    const success = data =>{
      if(data.status == 200){
        this.client = data.data;
        this.getHistoriqueSms();
      }
      this.telma_service.redirect(data,401,"/", this.router);
   }
    const error = data =>{
      console.log(data.error.message);
      this.telma_service.redirect(data,401,"/", this.router);
    }
    this.client_service.getClientByToken().subscribe(success,error);
  }

  
  getHistoriqueSms(){
      const success = data =>{
        if(data.status == 200){
          this.historique = data.data;
          this.histoAfficher = data.data;
          this.getHistoriqueSmsSortant(this.client.numero);
          this.getHistoriqueSmsEntrant(this.client.numero);
        }
        this.telma_service.redirect(data,401,"/", this.router);
     }
      const error = data =>{
        this.telma_service.redirect(data,401,"/", this.router);
      }
      this.client_service.getHistoriqueSms().subscribe(success,error);
  }


  getHistoriqueSmsEntrant(numero : string){
    this.historiqueEntrant =  this.historique.filter(function(histo) {
      return histo.envoyeur.indexOf(numero)!== 0;
    });

  }
   
  getHistoriqueSmsSortant(numero : string){
     this.historiqueSortant =  this.historique.filter(function(histo) {
     return histo.envoyeur.indexOf(numero) == 0;
    });
  }

}
