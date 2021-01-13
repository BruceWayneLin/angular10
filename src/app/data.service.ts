import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private GET_REST_API_SERVER = "https://jsonplaceholder.typicode.com/posts";
  private POST_REST_API_SERVER = "https://jsonplaceholder.typicode.com/posts/";
  private DEL_REST_API_SERVER = "https://jsonplaceholder.typicode.com/posts/";
  private UP_REST_API_SERVER = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(id, body, options){
    return this.httpClient.post<any>(`${this.POST_REST_API_SERVER}`, body, options);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.GET_REST_API_SERVER);
  }

  public sendDeleteRequest(){
    return this.httpClient.delete(this.DEL_REST_API_SERVER);
  }

  public sendUpdateRequest(){
    return this.httpClient.update(this.UP_REST_API_SERVER);
  }
}
