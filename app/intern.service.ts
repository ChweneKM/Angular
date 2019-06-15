import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Intern } from './intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }

  getInterns(){
    return this.http.get<Intern[]>('http://10.1.0.68:8070/getAll');
  }

  getInternById(id: any){
    return this.http.get<Intern>('http://10.1.0.68:8070/userOne' + '/' + id);
  }

  addIntern(intern: Intern){
    return this.http.post('http://10.1.0.68:8070/post' +  'Intern', intern);
  }

  deleteIntern(id: any){
    return this.http.delete('http://10.1.0.68:8070/deleteUser' +  'Intern' + '/' + id);
  }

  updateIntern(intern: Intern){
    return this.http.put('http://10.1.0.68:8070/user' +  'Intern' + '/' + intern.id, intern);
  }

  
}
