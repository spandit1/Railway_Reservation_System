import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  FilehttpOptions: any;

  constructor(private httpClient:HttpClient) { }

  

  
  createReservation(Reservation:Reservation):Observable<Object>{
    return this.httpClient.post(`http://localhost:8095/reserve`,Reservation);
  }

 
}