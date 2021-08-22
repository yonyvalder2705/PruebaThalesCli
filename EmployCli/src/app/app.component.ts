import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployCli';
  nameApp = 'Query Employees';

  Idclient=0;
  result="";
  employ: any = null;

  constructor(private http: HttpClient) { }

  Consultar() {
    if(this.Idclient == 0)
    {
     this.result = "Se va a consultar todos los empleados";
     this.ConsultAllEmploy();
    }
    else{
      this.result = "Se va a consultar el empleado con el Id " + this.Idclient.toString();
      this.ConsultEmployById()
    }
    
  }

  ConsultAllEmploy() {
    this.http.get("http://localhost/WSTestThalesYonyV/api/Employ/lstemploy")
      .subscribe(
        result => {
          this.employ = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

  ConsultEmployById() {
    this.http.get<any>("http://localhost/WSTestThalesYonyV/api/Employ/EmployById?id=" + this.Idclient.toString())
      .subscribe(
        result => {
          this.employ = Array.of(result);
          console.log(this.employ)
        },
        error => {
          console.log('problemas');
        }
      );
  } 
}
