import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  FilehttpOptions: any;
  // getTrainsById() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpClient:HttpClient) { }

  addTrain(train:Train):Observable<Object>{
    return this.httpClient.post(`http://localhost:8091/traindetails/addTrain`, train) ;
  }
  getAllTrains():Observable<Train[]>{
    return this.httpClient.get<Train[]>(`http://localhost:8091/traindetails/showAllTrain`);
  }
  getTrainsById(id:number):Observable<Train[]>{
    return this.httpClient.get<Train[]>(`http://localhost:8091/traindetails/showTrain/${id}`);
  }

  updateTrain(id: any, train: Train):Observable<Object> {
    return this.httpClient.put(`http://localhost:8091/putTrain/${id}`,train);
  }
  deleteEmployee(id: any): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8091/removeTrain/${id}`);
  }
  
}
