import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client/client.service';
import { TelmaService } from '../../services/telma/telma.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./../../../assets/css/login.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  numero : string ="";
  mdp : string ="";
  message : string = "";
  
  ngOnInit(): void {
  }

  constructor( private builder : FormBuilder,private router : Router,
    private client_service: ClientService, private telma_service : TelmaService ) { 
    this.form = builder.group({
      numero : ['0348818232'],
      mdp : ['123456']
    })
  }
  
  fillFromForm() : void {
    this.numero = this.form.get("numero")?.value;
    this.mdp = this.form.get("mdp")?.value;
  }

  login(){
    console.log(this.numero,this.mdp);

      const success = data =>{
        if(data.data !== null){
          this.telma_service.setTokenValue(data.data);
          this.router.navigate(['historique']);
        }
          this.message = data.message;
       }

      const error = data =>{
        this.message = data.message;
      }

      this.fillFromForm();
      this.client_service.login(this.numero, this.mdp).subscribe(
        success, error
      );
  }

}
