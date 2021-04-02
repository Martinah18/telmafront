import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { TelmaService } from '../../services/telma/telma.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./../../../assets/css/login.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;
  nom : string ="";
  prenom : string ="";
  numero : string ="";
  mdp : string ="";
  message : string = "";
  
  ngOnInit(): void {
  }
  constructor( private builder : FormBuilder,private client_service: ClientService, private telma_service : TelmaService ) { 
    this.form = builder.group({
      nom : ['Rahalinjanahary'],
      prenom : ['Martinah'],
      numero : ['8818232'],
      mdp : ['123456']
    })
  }
  
  fillFromForm() : void {
    this.nom = this.form.get("nom")?.value;
    this.prenom = this.form.get("prenom")?.value;
    this.numero = this.form.get("numero")?.value;
    this.mdp = this.form.get("mdp")?.value;
  }

  register(){
    console.log(this.nom, this.prenom, this.numero,this.mdp);

      const success = data =>{
        if(data.status == 200){
          this.telma_service.setTokenValue(data.data);
        }
         this.message = data.message;
       }

      const error = data =>{
        this.message = data.error.message;
      }

      this.fillFromForm();
      this.client_service.register(this.nom, this.prenom, this.numero, this.mdp).subscribe(
        success, error
      );

  }

}
