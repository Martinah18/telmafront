import { TelmaService } from './../telma/telma.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http : HttpClient,private telma_service : TelmaService) { }

  login(numero:string,mdp:string) : any{
    let data  = {"numero":numero,"mdp":mdp};
    return this.http.post(base_url+"api/clients/login",data);   
  }

  register(nom:string, prenom:string, numero:string, mdp: string){
    let data  = {"nom": nom, "prenom": prenom, "numero":numero,"mdp":mdp};
    return this.http.post(base_url+"api/clients",data);  
  }

  getClientByToken(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"api/clients",options); 
  }

  getHistoriqueAppel(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"api/clients/appels",options); 
  }

  effacerHistoriqueAppel(type : any){
    let url ="api/clients/appels";
    if(type == 1)  url = url+"/entrants";
    else if(type == 2)  url = url+"/sortants/supprimer";
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url + url,options);
  }


  getHistoriqueSms(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"api/clients/sms",options); 
  }

  effacerHistoriqueSms(type : any){
    let url = base_url;
    if(type == 1)  url = url+"api/clients/sms/entrants";
    else if(type == 2)  url = url+"api/clients/sms/sortants";
    else url = url+"sms";
    const options = this.telma_service.buildHeader();
    return this.http.put(url,options); 
  }
}
