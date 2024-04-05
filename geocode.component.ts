import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-geocode',
  templateUrl: './geocode.component.html',
  styleUrl: './geocode.component.css'
})
export class GeocodeComponent {
  address:string='';
  geocodeResult:any;

  constructor(private http:HttpClient){}

  geocode(){
    this.http.get<any>(`http://127.0.0.1:5000/geocode?address=${this.address}`)
      .subscribe(
        (data)=>{
          this.geocodeResult=data;
        },
        (error)=>{
          console.error('Error',error);
        }
      );
  }
}
