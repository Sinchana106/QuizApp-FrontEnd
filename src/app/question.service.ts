import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  url:String="http://localhost:8080/questions";

  getAllQuestions(category:string):Observable<Question[]>{
    return this.http.get<Question[]>(this.url+"/"+category,{headers:{'Authorization':localStorage.getItem('token')!}});
  }
}
