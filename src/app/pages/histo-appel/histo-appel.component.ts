import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { TelmaService } from '../../services/telma/telma.service';

@Component({
  selector: 'app-histo-appel',
  templateUrl: './histo-appel.component.html',
  styleUrls: ['./histo-appel.component.css']
})
export class HistoAppelComponent implements OnInit {

  types = [{"id":0,"nom":"tout"},{"id": 1, "nom":"Entrant"},{"id": 2, "nom":"Sortant"}];
   historique : any;
   historiqueEntrant : any; 
   historiqueSortant : any;
   histoAfficher : any;
   client : any;
   message : string ;
  constructor(private client_service : ClientService,private telma_service : TelmaService, private router : Router) {}

  
  ngOnInit(): void {
    this. getClient();
  }

  reloadData(){
    location.reload();
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

 effacerHistorique($event){
      const success = data =>{
        this.message = data.message;
        this.reloadData();
        this.telma_service.redirect(data,401,"/", this.router);
    }

    const error = data =>{
      this.message = data.error.message;
      this.telma_service.redirect(data,401,"/", this.router);
    }
    this.client_service.effacerHistoriqueAppel($event).subscribe(success,error);
  }

  getClient(){
    const success = data =>{
      if(data.status == 200){
        this.client = data.data;
        this.getHistoriqueAppel();
      }
      this.telma_service.redirect(data,401,"/", this.router);
   }
    const error = data =>{
      console.log(data.error.message);
    }
    this.client_service.getClientByToken().subscribe(success,error);
  }
  
  getHistoriqueAppel(){
      const success = data =>{
        if(data.status == 200){
          this.historique = data.data;
          this.histoAfficher = data.data;
          this.getHistoriqueAppelSortant(this.client.numero);
          this.getHistoriqueAppelEntrant(this.client.numero);
        }
        this.telma_service.redirect(data,401,"/", this.router);
     }

      const error = data =>{
        this.telma_service.redirect(data,401,"/", this.router);
      }

      this.client_service.getHistoriqueAppel().subscribe(success,error);
  }

  getHistoriqueAppelEntrant(numero : string){
    this.historiqueEntrant =  this.historique.filter(function(histo) {
      return histo.envoyeur.indexOf(numero)!== 0;
    });

  }
   
   getHistoriqueAppelSortant(numero : string){
    this.historiqueSortant =  this.historique.filter(function(histo) {
      return histo.envoyeur.indexOf(numero) == 0;
    });


   }
}
