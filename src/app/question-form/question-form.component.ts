import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-result',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  timeLeft: number = 60;
  interval:any;
     i:number=0;
    questions:Question[]=[];
    progress = 0; 
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.startTimer();
   this.questionService.getAllQuestions("prg").subscribe((data)=>{
    console.log(data);
    this.questions=data;
    
   })
  }
  Showprogressbar()  
  {  
    this.Showprogress(); 
  }  
 
 Showprogress()  
 {  
 this.progress = 0;  
   setInterval(() => this.ProgressBar(), 2000)  
   }  
  
 ProgressBar() {  
   
   if (this.progress == 0) {  
     this.progress = this.progress + 1  
   } else {  
     this.progress = this.progress + 1;  
     if (this.progress = this.progress + 30) {  
       this.progress == this.progress + 1;  
       if (this.progress >= 100) {  
         this.progress = 100;  
       }
      } 
    } 
  }
  startTimer(){
    this.interval=setInterval(()=>{
      if(this.timeLeft>0){
        this.timeLeft-=1;
      }
      else{
        this.timeLeft=60;
      }
    },1000)
  }

  


}
