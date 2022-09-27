import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-result',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

    questions:Question[]=[];
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
   this.questionService.getAllQuestions("c").subscribe((data)=>{
    console.log(data);
    this.questions=data;
   })
  }
  

}