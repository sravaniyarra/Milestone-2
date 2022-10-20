import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddnewService {

  constructor(public http : HttpClient) { }
  

  getData(){
    return this.http.get('http://localhost:7000/getdata')
  }
  postData(bodydata){
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
    return this.http.post('http://localhost:7000/postdata',JSON.stringify(bodydata),{headers:headers})
  }
  deleteData(_id){
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
    return this.http.delete(`http://localhost:6000/delete/${_id}`,{headers:headers})
  }
  modifyData(data,id){
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
    return this.http.put(`http://localhost:6000/modify/${id}`,data,{headers:headers})
   }
}
