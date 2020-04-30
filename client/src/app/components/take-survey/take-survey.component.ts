import { Component, OnInit } from '@angular/core';



import { SurveyService } from 'src/app/services/survey.service';

import { Survey } from 'src/app/models/survey';
import { Choice } from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  surveys: Array<Survey> = []
  choices: Array<Choice> = []
  surveyId: any;
  count: number;
  question: string;


  constructor(private surveyService: SurveyService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.surveyService.fetchAllSurveys()
  //   .subscribe((res:Array<Survey>)=> {
  //     console.log(res);
  //     this.surveys = res;

  //   })

  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      console.log(params.get('id'));
      this.question = params.get("text");
      this.surveyId = params.get("id");
      console.log(this.surveyId);
    })

    this.surveyService.fetchAllOptions(this.surveyId).subscribe((res: any) => {

      this.choices = res.choices;

    })

  }

  incrementCount(text: string) {



  }



}
