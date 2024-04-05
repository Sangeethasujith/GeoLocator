import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse-geocode',
  templateUrl: './reverse-geocode.component.html',
  styleUrl: './reverse-geocode.component.css'
})
export class ReverseGeocodeComponent {
  lat:string='';
  lng:string='';
  reverseGeocodeResult:any;

  constructor(private http:HttpClient){}

  reverseGeocode(){
    this.http.get<any>(`http://127.0.0.1:5000/reverse-geocode?lat=${this.lat}&lng=${this.lng}`)
      .subscribe((data)=>{
        this.reverseGeocodeResult=data;
      },
      (error)=>{
        console.error('Error',error);
      })
  }
}
