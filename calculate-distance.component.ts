import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate-distance',
  templateUrl: './calculate-distance.component.html',
  styleUrl: './calculate-distance.component.css'
})
export class CalculateDistanceComponent {
  lat1:string='';
  lng1:string='';
  lat2:string='';
  lng2:string='';
  distanceResult:any;

  constructor(private http:HttpClient){}

  calculateDistance(){
    this.http.get<any>(`http://127.0.0.1:5000/calculate_distance?lat1=${this.lat1}&lng1=${this.lng1}&lat2=${this.lat2}&lng2=${this.lng2}`).subscribe(
      (data)=>{
        this.distanceResult=data;
      },
      (error)=>{
        console.error('Error',error);
      }
    )
  }
}
